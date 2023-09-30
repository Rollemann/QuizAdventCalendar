import { canvas } from "../page";
import { collisionCheck } from "./collisionCheck";
type Point = { x: number, y: number };

export type SpriteArea = { x: number, y: number, width: number, height: number };

type PlayerSpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number
}

type AnimationSpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number,
    maxFrames: number,
    maxAnimations: number,
    frameRate: number,
    animationFrames: Point[],
    repeatAnimation: boolean,
    startStatic: boolean
}

type StaticSpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number
}

type Direction = 'left' | 'middle' | 'right';

type Animation = 'idle' | 'landing' | 'walking' | 'jumping' | null;


const gravity: number = 0.3;

export class PlayerSprite {
    position: Point;
    ctx: CanvasRenderingContext2D;
    velocity: Point = { x: 0, y: 0 };
    time: number = 0;
    image: HTMLImageElement = new Image();
    imgWidth: number;
    imgHeight: number;
    scale: number;
    walkVelocity: number = 3;
    jumpVelocity: number = -10;


    currentFrame: number = 0;
    maxFrames: number = 13;
    maxAnimations: number = 21;
    animationFrames: Point[] = [];
    frameRate: number = 20;
    repeatAnimation: boolean = true;
    idleAfter: boolean = false;

    direction: Direction = 'middle';
    newDirection: Direction = "middle";
    currentAnimation: Animation = null;

    constructor(spriteProps: PlayerSpriteProps) {
        this.position = spriteProps.position || { x: 0, y: 0 };
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.imgWidth = this.image.width / this.maxFrames;
        this.imgHeight = this.image.height / this.maxAnimations
        this.setIdleAnim();
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            this.animationFrames[this.currentFrame].x * this.imgWidth,
            this.animationFrames[this.currentFrame].y * this.imgHeight,
            this.imgWidth,
            this.imgHeight,
            this.position.x,
            this.position.y,
            this.imgWidth * this.scale,
            this.imgHeight * this.scale
        )
    }

    update(): SpriteArea {
        this.time += 1;

        // Gravity (canvas.height+3 to set him to the ground)
        if (canvas && this.position.y + ((this.imgHeight - 2) * this.scale) + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
            this.position.y = (canvas.height + 3) - (this.imgHeight * this.scale);
        }
        else {
            this.velocity.y += gravity;
        }

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.updateAnimation();

        // calculate currentFrame 
        if (this.time % this.frameRate == 0) {
            if (this.idleAfter && (this.currentFrame + 1) >= this.animationFrames.length) {
                this.setIdleAnim();
            }
            else if (this.repeatAnimation) {
                this.currentFrame = (this.currentFrame + 1) % this.animationFrames.length;
            }
            else {
                this.currentFrame = (this.currentFrame + 1) >= this.animationFrames.length ? this.currentFrame : this.currentFrame + 1;
            }
        }
        return { x: this.position.x, y: this.position.y, width: this.imgWidth * this.scale, height: (this.imgHeight - 2) * this.scale };
    }

    setIdleAnim() {
        if (this.currentAnimation != 'idle') {
            this.setupAnim(
                20,
                true,
                false,
                'middle',
                [
                    { x: 0, y: 2 },
                    { x: 1, y: 2 }
                ],
                'idle'
            );
        }
    }

    setJumpAnim() {
        if (this.currentAnimation != 'jumping') {
            let row: number;
            switch (this.direction) {
                case 'left':
                    row = 1;
                    break;
                case 'middle':
                    row = 2;
                    break;
                case 'right':
                    row = 3;
                    break;
                default:
                    throw new Error("Impossible direction to move!");
            }
            this.setupAnim(
                5,
                false,
                false,
                this.direction,
                [
                    { x: 0, y: row },
                    { x: 1, y: row },
                    { x: 2, y: row },
                    { x: 3, y: row },
                    { x: 4, y: row },
                    { x: 5, y: row }
                ],
                'jumping'
            );
        }
        else if (this.newDirection != this.direction) {
            this.direction = this.newDirection;
            let row: number;
            switch (this.direction) {
                case 'left':
                    row = 1;
                    break;
                case 'middle':
                    row = 2;
                    break;
                case 'right':
                    row = 3;
                    break;
                default:
                    throw new Error("Impossible direction to move!");
            }
            this.setupAnim(
                5,
                false,
                false,
                this.direction,
                [
                    { x: 5, y: row }
                ],
                'jumping'
            );
        }
    }

    setLandingAnim() {
        if (this.currentAnimation != 'landing') {
            this.setupAnim(
                10,
                false,
                true,
                'middle',
                [
                    { x: 4, y: 20 },
                    { x: 3, y: 20 },
                    { x: 2, y: 20 },
                    { x: 1, y: 20 }
                ],
                'landing'
            );
        }
    }

    setWalkAnim() {
        if (this.newDirection != this.direction) {
            this.direction = this.newDirection;
            this.currentFrame = 0;
            let row: number;

            switch (this.direction) {
                case 'left':
                    row = 9;
                    break;
                case 'right':
                    row = 11;
                    break;
                default:
                    throw new Error("Impossible direction to move!");
            }
            this.setupAnim(
                5,
                true,
                false,
                this.direction,
                [
                    { x: 0, y: row },
                    { x: 1, y: row },
                    { x: 2, y: row },
                    { x: 3, y: row },
                    { x: 4, y: row },
                    { x: 5, y: row },
                    { x: 6, y: row },
                    { x: 7, y: row },
                    { x: 8, y: row },

                ],
                'walking'
            );
        }
    }

    setupAnim(
        frameRate: number,
        repeatAnimation: boolean,
        idleAfter: boolean,
        direction: Direction,
        animationFrames: Point[],
        currentAnimation: Animation
    ) {
        this.currentFrame = 0;
        this.frameRate = frameRate;
        this.repeatAnimation = repeatAnimation;
        this.idleAfter = idleAfter;
        this.direction = direction;
        this.animationFrames = animationFrames;
        this.currentAnimation = currentAnimation;
    }


    walkLeft() {
        this.velocity.x = -1 * this.walkVelocity;
        this.newDirection = "left";
    }

    walkRight() {
        this.velocity.x = this.walkVelocity;
        this.newDirection = "right";
    }

    jump() {
        if (this.velocity.y == 0) {
            this.velocity.y = this.jumpVelocity;
        }
    }

    stop() {
        this.velocity.x = 0;
        this.newDirection = 'middle';
    }

    updateAnimation() {
        if (this.velocity.y == 0 && this.currentAnimation == 'jumping') {
            this.setLandingAnim();
        }
        else if (this.velocity.y != 0) {
            this.setJumpAnim();
        }
        else if (this.velocity.x != 0) {
            this.setWalkAnim();
        }
        else if (this.velocity.x == 0 && this.velocity.y == 0 && this.currentAnimation == 'walking') { // TODO: vielleicht Probleme mit "Interact"
            this.setIdleAnim();
        }
    }
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

    constructor(spriteProps: AnimationSpriteProps, staticFrame: Point | null = null) {
        this.position = spriteProps.position || { x: 0, y: 0 };
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.maxFrames = spriteProps.maxFrames;
        this.maxAnimations = spriteProps.maxAnimations;
        this.frameRate = spriteProps.frameRate;
        this.animationFrames = spriteProps.animationFrames;
        this.staticFrame = staticFrame;
        this.repeatAnimation = spriteProps.repeatAnimation;
        this.isStatic = spriteProps.startStatic;

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

        this.draw();
    }

    updateInteratable(playerArea: SpriteArea) {
        this.update();
        this.interactable = false;
        if (collisionCheck(playerArea, [{ x: this.position.x + 20, y: this.position.y, width: this.image.width / this.maxFrames * this.scale - 40, height: this.image.height / this.maxAnimations * this.scale }]) != null) {
            this.showEButton();
            this.interactable = true;
        }
    }

    toggleAnimation() {
        if (this.staticFrame && this.interactable) {
            this.isStatic = !this.isStatic;
            this.currentFrame = 0;
            if (this.isStatic) {
                this.currentFrames = [this.staticFrame];
            }
            else {
                this.currentFrames = this.animationFrames;
            }

        }
    }

    showEButton() {
        const xPos = this.position.x + (this.image.width / this.maxFrames * this.scale)/2;
        const yPos = this.position.y;
        this.ctx.beginPath();
        this.ctx.arc(xPos, yPos-25, 20, 0, 2*Math.PI);
        this.ctx.fillStyle = 'lightGrey'
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.font = "32px Retro Gaming";
        this.ctx.fillStyle = 'black'
        this.ctx.fillText("e", xPos-13, yPos-18);
    }
}


export class StaticSprite {
    position: Point;
    ctx: CanvasRenderingContext2D;
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number;

    constructor(spriteProps: StaticSpriteProps) {
        this.position = spriteProps.position || { x: 0, y: 0 };
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
    };

    draw(): SpriteArea {
        this.ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.image.width * this.scale,
            this.image.height * this.scale
        )
        return { x: this.position.x, y: this.position.y, width: this.image.width * this.scale, height: this.image.height * this.scale };
    }
}