import { MoveProps, SpriteArea } from "./typesForSprites";

export type StaticSpriteProps = {
    area: SpriteArea,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number,
    moveProps: MoveProps | null,
    hitBoxOffset: SpriteArea,
    imageWholeSize: {w:boolean, h: boolean}
}

export class StaticSprite {
    area: SpriteArea;
    ctx: CanvasRenderingContext2D;
    time: number = 0;
    image: HTMLImageElement = new Image();
    scale: number; // TODO: kann wahrscheinlich raus
    moveProps: MoveProps | null;
    hitBox: SpriteArea = { x: 0, y: 0, width: 0, height: 0 };
    hitBoxOffset: SpriteArea;
    imageWholeSize: {w:boolean, h: boolean};


    constructor(spriteProps: StaticSpriteProps) {
        this.area = spriteProps.area;
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.moveProps = spriteProps.moveProps;
        this.hitBoxOffset = spriteProps.hitBoxOffset;
        this.imageWholeSize = spriteProps.imageWholeSize;

        this.updateHitBox();
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            0,
            0,
            (this.imageWholeSize.w? this.image.width: this.area.width),
            (this.imageWholeSize.h? this.image.height: this.area.height),
            this.area.x,
            this.area.y,
            this.area.width * this.scale,
            this.area.height * this.scale
        )

        // TODO: hitboxen raus
        this.ctx.strokeStyle = "green";
        this.ctx.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);
        this.ctx.strokeRect(100, 0, 100,720);
        this.ctx.strokeRect(300, 0, 100,720);
        this.ctx.strokeRect(500, 0, 100,720);
        this.ctx.strokeRect(700, 0, 100,720);
        this.ctx.strokeRect(900, 0, 100,720);
        this.ctx.strokeRect(1100, 0, 100,720);
        this.ctx.strokeRect(0, 100, 1280,100);
        this.ctx.strokeRect(0, 300, 1280,100);
        this.ctx.strokeRect(0, 500, 1280,100);
        this.ctx.strokeRect(0, 700, 1280,100);
    }

    update(): SpriteArea {
        if (this.moveProps) {
            if (this.moveProps.move) {
                const inXrange = this.area.x + this.moveProps.velocityX <= this.moveProps.startX + this.moveProps.rangeX && this.area.x + this.moveProps.velocityX >= this.moveProps.startX;
                this.moveProps.velocityX = inXrange ? this.moveProps.velocityX : -this.moveProps.velocityX;
                this.area.x = this.area.x + this.moveProps.velocityX;

                const inYrange = this.area.y + this.moveProps.velocityY <= this.moveProps.startY + this.moveProps.rangeY && this.area.y + this.moveProps.velocityY >= this.moveProps.startY;
                this.moveProps.velocityY = inYrange ? this.moveProps.velocityY : -this.moveProps.velocityY;
                this.area.y = this.area.y + this.moveProps.velocityY;
                this.updateHitBox();
            }
            if (this.moveProps.drawLine) {
                this.ctx.strokeStyle = "black";
                this.ctx.strokeRect(this.moveProps.startX + this.area.width * this.scale / 2, this.moveProps.startY + this.area.height * this.scale / 2, this.moveProps.rangeX, this.moveProps.rangeY);
            }
        }
        this.draw()
        return this.hitBox;
    }

    toggleMovement() {
        if (this.moveProps) {
            this.moveProps.move = !this.moveProps.move;
        }
    }

    updateHitBox() {
        this.hitBox = { x: this.area.x + this.hitBoxOffset.x, y: this.area.y + this.hitBoxOffset.y, width: this.area.width * this.scale + this.hitBoxOffset.width, height: this.area.height * this.scale + this.hitBoxOffset.height };
    }
}