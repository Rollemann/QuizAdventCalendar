import { MoveProps, Point, SpriteArea } from "./typesForSprites";

export type StaticSpriteProps = {
    area: SpriteArea,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number,
    moveProps: MoveProps | null;
}

export class StaticSprite {
    area: SpriteArea;
    ctx: CanvasRenderingContext2D;
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number;
    moveProps: MoveProps | null;
    startPos: Point;


    constructor(spriteProps: StaticSpriteProps) {
        this.area = spriteProps.area;
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.moveProps = spriteProps.moveProps;
        this.startPos = { x: this.area.x, y: this.area.y };
    };

    draw() {
        /* this.ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.image.width * this.scale,
            this.image.height * this.scale
        ) */
        this.ctx.strokeStyle = "green";
        this.ctx.strokeRect(this.area.x, this.area.y, this.area.width, this.area.height);
    }

    update(): SpriteArea {
        if (this.moveProps) {
            const inXrange = this.area.x + this.moveProps.velocityX <= this.startPos.x + this.moveProps.rangeX && this.area.x + this.moveProps.velocityX >= this.startPos.x;
            this.moveProps.velocityX = inXrange ? this.moveProps.velocityX : -this.moveProps.velocityX;
            this.area.x = this.area.x + this.moveProps.velocityX;

            const inYrange = this.area.y + this.moveProps.velocityY <= this.startPos.y + this.moveProps.rangeY && this.area.y + this.moveProps.velocityY >= this.startPos.y;
            this.moveProps.velocityY = inYrange ? this.moveProps.velocityY : -this.moveProps.velocityY;
            this.area.y = this.area.y + this.moveProps.velocityY;
        }
        this.draw()
        return { x: this.area.x, y: this.area.y, width: this.area.width, height: this.area.height };
    }
}