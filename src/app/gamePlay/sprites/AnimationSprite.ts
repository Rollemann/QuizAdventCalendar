import { getTimeString } from "@/app/components/transformDBContentForUI";
import { collisionCheck } from "../collisionCheck";
import { levelTimer } from "../setupGame";
import { PlayerSprite } from "./PlayerSprite";
import { MoveProps, Point, SpriteArea } from "./typesForSprites";

type DayNumber = {
    isDisplayed: boolean
    value: number,
    size: number,
    color: 'black' | 'white' | "darkred",
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

let keysCollected: boolean[] = [true]; // level 0 is Main and there is no key
let doorCanBeOpened: boolean[] = [true]; // all doors of level 0 can be opened

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
        this.ctx.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);
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
            if (this.moveProps.move) {
                const inXrange = this.position.x + this.moveProps.velocityX <= this.moveProps.startX + this.moveProps.rangeX && this.position.x + this.moveProps.velocityX >= this.moveProps.startX;
                this.moveProps.velocityX = inXrange ? this.moveProps.velocityX : -this.moveProps.velocityX;
                this.position.x = this.position.x + this.moveProps.velocityX;

                const inYrange = this.position.y + this.moveProps.velocityY <= this.moveProps.startY + this.moveProps.rangeY && this.position.y + this.moveProps.velocityY >= this.moveProps.startY;
                this.moveProps.velocityY = inYrange ? this.moveProps.velocityY : -this.moveProps.velocityY;
                this.position.y = this.position.y + this.moveProps.velocityY;
                this.hitBox = { x: this.position.x + (this.hitBoxOffset.x * this.scale), y: this.position.y + (this.hitBoxOffset.y * this.scale), width: (this.imgWidth - this.hitBoxOffset.width) * this.scale, height: (this.imgHeight - this.hitBoxOffset.height) * this.scale };
            }
            if (this.moveProps.drawLine) {
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.moveProps.startX + (this.imgWidth * this.scale) / 2, this.moveProps.startY + (this.imgHeight * this.scale) / 2, this.moveProps.rangeX, this.moveProps.rangeY);
            }

        }

        this.draw();
    }

    updateDoor(playerArea: SpriteArea) {
        this.update();
        this.interactable = false;
        const date = new Date();
        if (date.getDate() >= this.dayNumber.value && collisionCheck(playerArea, [this.hitBox]) >= 0) {
            this.interactable = true;
            this.showEButton();
        }
        const curTime = levelTimer.allUserTimesByLevel[this.dayNumber.value];
        if (curTime) {
            if (curTime.endTime) {
                this.drawTime(getTimeString(curTime.endTime - curTime.startTime));
            }
            else{
                this.dayNumber.color = "darkred";
            }
        }
    }

    updateTreasure(playerArea: SpriteArea) {
        this.update();
        this.interactable = false;
        if (this.isStatic && collisionCheck(playerArea, [this.hitBox]) >= 0) {
            this.interactable = true;
            this.showEButton();
        }
        const curTime = levelTimer.allUserTimesByLevel[this.dayNumber.value];
        if (curTime && curTime.endTime && !keysCollected[this.dayNumber.value]) { // TODO: das hier wieder richtig machen
            keysCollected[this.dayNumber.value] = true;
            this.interactable = true;
            this.frameRate = 1;
            this.toggleTreasure();
        }
    }

    updateTrap(playerArea: SpriteArea, player: PlayerSprite) {
        this.update();
        if (this.moveProps && !this.moveProps.move) {
            return;
        }
        if (collisionCheck(playerArea, [this.hitBox]) >= 0) {
            player.die();
        }
    }

    updateLever(playerArea: SpriteArea) {
        this.update();
        this.interactable = false;
        if (collisionCheck(playerArea, [this.hitBox]) >= 0) {
            this.interactable = true;
            this.showEButton();
        }
    }

    updateKey(playerArea: SpriteArea) {
        if (!keysCollected[this.dayNumber.value]) {
            this.update();
            this.interactable = false;
            if (collisionCheck(playerArea, [this.hitBox]) >= 0) {
                this.interactable = true;
                this.showEButton();
            }
        }
    }

    toggleMovement() {
        if (this.moveProps) {
            this.moveProps.move = !this.moveProps.move;
            this.toggleAnimation();
        }
    }

    toggleDoor(currentLevel: number): boolean {
        if (this.interactable && doorCanBeOpened[currentLevel]) {
            this.dayNumber.isDisplayed = false;
            if (!this.isStatic) {
                return true;
            }
            return this.toggleAnimation();
        }
        return false;
    }

    toggleTreasure(): boolean {
        if (this.interactable) {
            if (keysCollected[this.dayNumber.value]) {
                doorCanBeOpened[this.dayNumber.value] = true;
                this.dayNumber.isDisplayed = false;
                return this.toggleAnimation();
            }
        }
        return false;
    }

    toggleAnimation(): boolean {
        if (this.staticFrame && this.interactable) {
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

    collectKey() {
        keysCollected[this.dayNumber.value] = true;
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
        if (this.dayNumber.isDisplayed) {
            const text = this.dayNumber.value == 0 ? 'Main' : this.dayNumber.value.toString();
            this.ctx.font = `${this.dayNumber.size}px Retro Gaming`;
            this.ctx.fillStyle = this.dayNumber.color;
            const numberW = this.ctx.measureText(text).width;
            const posX = this.hitBox.x + this.hitBox.width / 2 - numberW / 2;
            this.ctx.fillText(text, posX, this.position.y + (this.dayNumber.yOffset * this.scale));
        }
    }

    drawTime(time: string) {
        this.ctx.font = "16px Retro Gaming";
        this.ctx.fillStyle = "black";
        const numberW = this.ctx.measureText(time).width;
        const posX = this.hitBox.x + this.hitBox.width / 2 - numberW / 2;
        this.ctx.fillText(time, posX, this.position.y - 1);
    }
}