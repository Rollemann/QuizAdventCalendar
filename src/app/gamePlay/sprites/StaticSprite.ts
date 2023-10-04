import { SpriteArea } from "./typesForSprites";

type StaticSpriteProps = {
    area: SpriteArea,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number
}

export class StaticSprite {
    area: SpriteArea;
    ctx: CanvasRenderingContext2D;
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number;

    constructor(spriteProps: StaticSpriteProps) {
        this.area = spriteProps.area;
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
    };

    draw(): SpriteArea {
        /* this.ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.image.width * this.scale,
            this.image.height * this.scale
        ) */
        this.ctx.strokeStyle = "green";
        this.ctx.strokeRect(this.area.x, this.area.y, this.area.width, this.area.height);
        return { x: this.area.x, y: this.area.y, width: this.area.width, height: this.area.height };

    }
}