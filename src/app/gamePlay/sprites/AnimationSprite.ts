import { collisionCheck } from "../collisionCheck";
import { PlayerSprite } from "./PlayerSprite";
import { MoveProps, Point, SpriteArea } from "./typesForSprites";

type DayNumber = {
    isDisplayed: boolean
    value: number,
    size: number,
    color: 'black',
    yOffset: number
}

export type AnimationSpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number,
    maxFrames: number,
    maxAnimations: number,
    frameRate: number,
    animationFrames: Point[],
    repeatAnimation: boolean,
    startStatic: boolean,
    dayNumber: DayNumber,
    hitBoxOffset: SpriteArea,
    staticFrame: Point | null,
    moveProps: MoveProps | null;
}


export class AnimationSprite {
    position: Point;
    ctx: CanvasRenderingContext2D;
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number;

    currentFrame: number = 0;
    maxFrames: number;
    maxAnimations: number = 1;
    animationFrames: Point[] = [];
    frameRate: number;
    staticFrame: Point | null;
    isStatic: boolean = false;
    currentFrames: Point[];
    repeatAnimation: boolean;
    interactable: boolean = true;
    dayNumber: DayNumber;
    hitBox: SpriteArea;
    hitBoxOffset: SpriteArea;
    moveProps: MoveProps | null;
    startPos: Point;

    imgWidth: number;
    imgHeight: number;

    constructor(spriteProps: AnimationSpriteProps) {
        this.position = spriteProps.position || { x: 0, y: 0 };
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.maxFrames = spriteProps.maxFrames;
        this.maxAnimations = spriteProps.maxAnimations;
        this.frameRate = spriteProps.frameRate;
        this.animationFrames = spriteProps.animationFrames;
        this.staticFrame = spriteProps.staticFrame;
        this.repeatAnimation = spriteProps.repeatAnimation;
        this.isStatic = spriteProps.startStatic;
        this.dayNumber = spriteProps.dayNumber;
        this.hitBoxOffset = spriteProps.hitBoxOffset;
        this.moveProps = spriteProps.moveProps;

        this.startPos = { x: this.position.x, y: this.position.y };
        this.imgWidth = this.image.width / this.maxFrames;
        this.imgHeight = this.image.height / this.maxAnimations;
        this.hitBox = { x: this.position.x + (this.hitBoxOffset.x * this.scale), y: this.position.y + (this.hitBoxOffset.y * this.scale), width: (this.imgWidth - this.hitBoxOffset.width) * this.scale, height: (this.imgHeight - this.hitBoxOffset.height) * this.scale };

        this.currentFrames = (this.isStatic && this.staticFrame) ? [this.staticFrame] : this.animationFrames;
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            this.currentFrames[this.currentFrame].x * (this.image.width / this.maxFrames),
            this.currentFrames[this.currentFrame].y * (this.image.height / this.maxAnimations),
            this.image.width / this.maxFrames,
            this.image.height / this.maxAnimations,
            this.position.x,
            this.position.y,
            (this.image.width / this.maxFrames) * this.scale,
            (this.image.height / this.maxAnimations) * this.scale
        )

        this.drawDayNumber();

        //TODO Hitbox raus
        this.ctx.strokeStyle = "yellow";
        //this.ctx.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);
    }

    update() {
        this.time += 1;

        // calculate currentFrame
        if (this.time % this.frameRate == 0) {
            if (this.repeatAnimation) {
                this.currentFrame = (this.currentFrame + 1) % this.currentFrames.length;
            }
            else {
                this.currentFrame = ((this.currentFrame + 1) < this.currentFrames.length) ? (this.currentFrame + 1) : this.currentFrame;
            }
        }

        if (this.moveProps) {
            const inXrange = this.position.x + this.moveProps.velocityX <= this.startPos.x + this.moveProps.rangeX && this.position.x + this.moveProps.velocityX >= this.startPos.x;
            this.moveProps.velocityX = inXrange ? this.moveProps.velocityX : -this.moveProps.velocityX;
            this.position.x = this.position.x + this.moveProps.velocityX;

            const inYrange = this.position.y + this.moveProps.velocityY <= this.startPos.y + this.moveProps.rangeY && this.position.y + this.moveProps.velocityY >= this.startPos.y;
            this.moveProps.velocityY = inYrange ? this.moveProps.velocityY : -this.moveProps.velocityY;
            this.position.y = this.position.y + this.moveProps.velocityY;

            this.hitBox = { x: this.position.x + (this.hitBoxOffset.x * this.scale), y: this.position.y + (this.hitBoxOffset.y * this.scale), width: (this.imgWidth - this.hitBoxOffset.width) * this.scale, height: (this.imgHeight - this.hitBoxOffset.height) * this.scale };
        }

        this.draw();
    }

    updateInteractable(playerArea: SpriteArea) {
        this.update();
        this.interactable = false;
        if (collisionCheck(playerArea, [this.hitBox]) >= 0) {
            this.showEButton();
            this.interactable = true;
        }
    }

    updateKillable(playerArea: SpriteArea, player: PlayerSprite) {
        this.update();
        if (collisionCheck(playerArea, [this.hitBox]) >= 0) {
            player.die();
        }
    }

    toggleAnimation(): boolean {
        if (this.staticFrame && this.interactable) {
            if (this.dayNumber.value > 0) {
                const date = new Date();
                if (date.getDate() < this.dayNumber.value) {
                    return false;
                }
            }
            this.isStatic = !this.isStatic;
            this.currentFrame = 0;
            if (this.isStatic) {
                this.currentFrames = [this.staticFrame];
            }
            else {
                this.currentFrames = this.animationFrames;
            }
            return true;
        }
        return false;
    }

    showEButton() {
        const xPos = this.position.x + (this.image.width / this.maxFrames * this.scale) / 2;
        const yPos = this.position.y;
        this.ctx.strokeStyle = "black";
        this.ctx.beginPath();
        this.ctx.arc(xPos, yPos - 25, 20, 0, 2 * Math.PI);
        this.ctx.fillStyle = 'lightGrey'
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.font = "32px Retro Gaming";
        this.ctx.fillStyle = 'black'
        this.ctx.fillText("e", xPos - 13, yPos - 18);
    }

    drawDayNumber() {
        if (this.dayNumber.isDisplayed && this.isStatic) {
            const text = this.dayNumber.value == 0? 'Main' : this.dayNumber.value.toString();   
            this.ctx.font = `${this.dayNumber.size}px Retro Gaming`;
            this.ctx.fillStyle = this.dayNumber.color;
            const numberW = this.ctx.measureText(text).width;
            const posX = this.hitBox.x + this.hitBox.width / 2 - numberW / 2;
            this.ctx.fillText(text, posX, this.position.y + (this.dayNumber.yOffset * this.scale));
        }
    }
}