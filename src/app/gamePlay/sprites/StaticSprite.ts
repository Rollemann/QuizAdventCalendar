import { MoveProps, Point, SpriteArea } from "./typesForSprites";

export type StaticSpriteProps = {
    area: SpriteArea,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number,
    moveProps: MoveProps | null,
    hitBoxOffset: SpriteArea
}

export class StaticSprite {
    area: SpriteArea;
    ctx: CanvasRenderingContext2D;
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number; // TODO: kann wahrscheinlich raus
    moveProps: MoveProps | null;
    startPos: Point;
    hitBox: SpriteArea = { x: 0, y: 0, width: 0, height: 0 };
    hitBoxOffset: SpriteArea;


    constructor(spriteProps: StaticSpriteProps) {
        this.area = spriteProps.area;
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.moveProps = spriteProps.moveProps;
        this.startPos = { x: this.area.x, y: this.area.y };
        this.hitBoxOffset = spriteProps.hitBoxOffset;

        this.updateHitBox();
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            0,
            0,
            this.area.width,
            this.image.height,
            this.area.x,
            this.area.y,
            this.area.width * this.scale,
            this.area.height * this.scale
        )
        this.ctx.strokeStyle = "green";
        this.ctx.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);
    }

    update(): SpriteArea {
        if (this.moveProps) {
            const inXrange = this.area.x + this.moveProps.velocityX <= this.startPos.x + this.moveProps.rangeX && this.area.x + this.moveProps.velocityX >= this.startPos.x;
            this.moveProps.velocityX = inXrange ? this.moveProps.velocityX : -this.moveProps.velocityX;
            this.area.x = this.area.x + this.moveProps.velocityX;

            const inYrange = this.area.y + this.moveProps.velocityY <= this.startPos.y + this.moveProps.rangeY && this.area.y + this.moveProps.velocityY >= this.startPos.y;
            this.moveProps.velocityY = inYrange ? this.moveProps.velocityY : -this.moveProps.velocityY;
            this.area.y = this.area.y + this.moveProps.velocityY;
            this.updateHitBox();
        }
        this.draw()
        return this.hitBox;
    }

    updateHitBox() {
        this.hitBox = { x: this.area.x + this.hitBoxOffset.x, y: this.area.y + this.hitBoxOffset.y, width: this.area.width * this.scale + this.hitBoxOffset.width, height: this.area.height * this.scale + this.hitBoxOffset.height };
    }
}