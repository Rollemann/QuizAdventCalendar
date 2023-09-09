import { canvas } from "../page";
type Point = { x: number, y: number };

type SpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number
}

export class Sprite {
    position: Point;
    ctx: CanvasRenderingContext2D;
    acceleration: number = 9.81;
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number;
    currentFrame: number = 0;
    maxFrames = 13;

    constructor(spriteProps: SpriteProps) {
        this.position = spriteProps.position || { x: 0, y: 0 };
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            this.currentFrame * (this.image.width / this.maxFrames),
            0,
            this.image.width / this.maxFrames,
            this.image.height / 21,
            this.position.x,
            this.position.y,
            (this.image.width / this.maxFrames) * this.scale,
            (this.image.height / 21) * this.scale
        )
    }
    update() {
        this.draw();

        this.time += 0.1;
        this.position.y += 0.5 * this.acceleration * this.time ^ 2;
        this.position.x += 10;
        if (canvas && canvas.height < this.position.y) {
            this.position.x = 0;
            this.position.y = 0;
            this.time = 0;
        }
        console.log(this.position);
    }
}