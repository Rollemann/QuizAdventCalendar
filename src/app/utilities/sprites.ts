import { canvas } from "../page";
type Point = { x: number, y: number };

type PlayerSpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number
}

type Direction = 'left' | 'middle' | 'right';

type Animation = 'idle' | 'falling' | 'landing' | 'walking' | null;


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

    direction: Direction = 'middle';
    currentAnimation: Animation = null;

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

        this.position.x += this.velocity.x;
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
            this.setupAnim(
                20,
                true,
                false,
                [
                    { x: 0, y: 2 },
                    { x: 1, y: 2 }
                ],
                'idle'
            );
            this.velocity.x = 0;
        }
    }

    fallingAnim() {
        if (this.currentAnimation != 'falling') {
            this.setupAnim(
                5,
                false,
                false,
                [
                    { x: 0, y: 2 },
                    { x: 1, y: 2 },
                    { x: 2, y: 2 },
                    { x: 3, y: 2 },
                    { x: 4, y: 2 },
                    { x: 5, y: 2 }
                ],
                'falling'
            );
        }
    }

    landingAnim() {
        if (this.currentAnimation != 'landing') {
            this.setupAnim(
                10,
                false,
                true,
                [
                    { x: 4, y: 20 },
                    { x: 3, y: 20 },
                    { x: 2, y: 20 },
                    { x: 1, y: 20 }
                ],
                'landing'
            );
            this.velocity.x = 0;
        }
    }

    walkAnim(direction: Direction) {
        this.currentFrame = 0;
        let row: number = 0;
        this.direction = direction;

        switch (direction) {
            case 'left':
                this.velocity.x = -4;
                row = 9;
                break;
            case 'right':
                this.velocity.x = 4;
                row = 11;
                break;
            default:
                throw new Error("Impossible direction to move!");
        }
        this.setupAnim(
            10,
            true,
            false,
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

    setupAnim(
        frameRate: number,
        repeatAnimation: boolean,
        idleAfter: boolean,
        animationFrames: Point[],
        currentAnimation: Animation
    ) {
        this.currentFrame = 0;
        this.frameRate = frameRate;
        this.repeatAnimation = repeatAnimation;
        this.idleAfter = idleAfter;
        this.animationFrames = animationFrames;
        this.currentAnimation = currentAnimation;
    }
}