import { StaticTypesProps } from "./typesForSprites";

export function allStaticSpritesProps(ctx: CanvasRenderingContext2D): StaticTypesProps[] {
    const mainWidth = 90;
    const mainHeight = 10;
    return [
        {
            grounds: [
                {
                    area: { x: 0, y: 710, width: ctx.canvas.width, height: 10 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null
                },
                {
                    area: { x: 270, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                },
                {
                    area: { x: 420, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                },
                {
                    area: { x: 570, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                },
                {
                    area: { x: 720, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                },
                {
                    area: { x: 870, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                },
                {
                    area: { x: 1020, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 195, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 345, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 495, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 645, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 795, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 945, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 270, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 420, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 570, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 720, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 870, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                }, {
                    area: { x: 1020, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null

                },
            ],
            walls: [
                {
                    area: { x: 100, y: 600, width: 50, height: 10 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: {velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 100}
                },
            ]
        },
        {
            grounds: [
                {
                    area: { x: 0, y: 710, width: ctx.canvas.width, height: 10 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null
                },
                {
                    area: { x: 270, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null
                }
            ],
            walls: [

            ]
        }
    ]
}

















