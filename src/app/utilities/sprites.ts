import { canvas } from "../page";
type Point = { x: number, y: number };

type PlayerSpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number
}

const gravity: number = 0.3;

export class PlayerSprite {
    position: Point;
    ctx: CanvasRenderingContext2D;
    velocity: Point = { x: 0, y: 0 };
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number;

    currentFrame: number = 0;
    maxFrames: number = 13;
    maxAnimations: number = 21;
    animationFrames: Point[] = [];
    frameRate: number = 20;
    repeatAnimation: boolean = true;
    idleAfter: boolean = false;

    direction: 'left' | 'middle' | 'right' = 'middle';
    currentAnimation: 'idle' | 'falling' | 'landing' | 'walking' | null = null;

    constructor(spriteProps: PlayerSpriteProps) {
        this.position = spriteProps.position || { x: 0, y: 0 };
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.idleAnim();
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            this.animationFrames[this.currentFrame].x * (this.image.width / this.maxFrames),
            this.animationFrames[this.currentFrame].y * (this.image.height / this.maxAnimations),
            this.image.width / this.maxFrames,
            this.image.height / this.maxAnimations,
            this.position.x,
            this.position.y,
            (this.image.width / this.maxFrames) * this.scale,
            (this.image.height / this.maxAnimations) * this.scale
        )
    }

    update() {
        this.draw();

        // Animation
        this.time += 1;

        if (this.time % this.frameRate == 0) {
            if (this.idleAfter && (this.currentFrame + 1) >= this.animationFrames.length) {
                this.idleAnim();
            }
            else if (this.repeatAnimation) {
                this.currentFrame = (this.currentFrame + 1) % this.animationFrames.length;
            }
            else {
                this.currentFrame = (this.currentFrame + 1) >= this.animationFrames.length ? this.currentFrame : this.currentFrame + 1;
            }
        }

        this.position.y += this.velocity.y;
        // Back to the Ground (canvas.height+3 to set him to the ground)
        if (canvas && this.position.y + ((this.image.height / this.maxAnimations) * this.scale) + this.velocity.y >= canvas.height + 3) {
            this.velocity.y = 0;
            this.position.y = (canvas.height + 3) - ((this.image.height / this.maxAnimations) * this.scale);
            if (this.currentAnimation == 'falling') {
                this.landingAnim();
            }
        }
        else {            
            this.velocity.y += gravity;
            this.fallingAnim();
        }
    }

    idleAnim() {
        if (this.currentAnimation != 'idle') {
            this.currentFrame = 0;
            this.frameRate = 20;
            this.repeatAnimation = true;
            this.idleAfter = false;
            this.animationFrames = [
                { x: 0, y: 2 },
                { x: 1, y: 2 }
            ];
            this.currentAnimation = 'idle';
        }
    }

    fallingAnim() {
        if (this.currentAnimation != 'falling') {
            this.currentFrame = 0;
            this.frameRate = 5;
            this.repeatAnimation = false;
            this.idleAfter = false;
            this.animationFrames = [
                { x: 0, y: 2 },
                { x: 1, y: 2 },
                { x: 2, y: 2 },
                { x: 3, y: 2 },
                { x: 4, y: 2 },
                { x: 5, y: 2 }
            ];
            this.currentAnimation = 'falling';
        }
    }

    landingAnim() {
        if (this.currentAnimation != 'landing') {
            this.currentFrame = 0;
            this.frameRate = 10;
            this.repeatAnimation = false;
            this.idleAfter = true;
            this.animationFrames = [
                { x: 4, y: 20 },
                { x: 3, y: 20 },
                { x: 2, y: 20 },
                { x: 1, y: 20 }
            ];
            this.currentAnimation = 'landing';
        }
    }
}