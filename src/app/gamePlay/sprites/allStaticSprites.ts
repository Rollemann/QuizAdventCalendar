import { StaticTypesProps } from "./typesForSprites";

export function allStaticSpritesProps(ctx: CanvasRenderingContext2D): StaticTypesProps[] {
    const mainWidth = 80;
    const mainHeight = 10;
    return [
        {
            grounds: [
                {
                    area: { x: 0, y: 710, width: ctx.canvas.width, height: 10 },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                },
                {
                    area: { x: 275, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                },
                {
                    area: { x: 425, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                },
                {
                    area: { x: 575, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                },
                {
                    area: { x: 725, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                },
                {
                    area: { x: 875, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                },
                {
                    area: { x: 1025, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 200, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 350, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 500, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 650, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 800, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 950, y: 378, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 275, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 425, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 575, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 725, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 875, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                }, {
                    area: { x: 1025, y: 212, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1
                },
            ],
            walls: [
                {
                    area: { x: 100, y: 600, width: 50, height: 10 },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
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
                    imageSrc: './Questionmark.png',
                    scale: 1,
                    moveProps: null
                },
                {
                    area: { x: 275, y: 544, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './Questionmark.png',
                    scale: 1,
                    moveProps: null
                }
            ],
            walls: [

            ]
        }
    ]
}

















