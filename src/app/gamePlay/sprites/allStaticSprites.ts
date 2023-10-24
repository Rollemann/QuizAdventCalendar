import { StaticTypesProps } from "./typesForSprites";

export function allStaticSpritesProps(ctx: CanvasRenderingContext2D): StaticTypesProps[] {
    const mainWidth = 90;
    const mainHeight = 20;
    return [
/*0*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
                {
                    area: { x: 270, y: 535, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 420, y: 535, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 570, y: 535, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 720, y: 535, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 870, y: 535, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 1020, y: 535, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 195, y: 370, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 345, y: 370, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 495, y: 370, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 645, y: 370, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 795, y: 370, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                {
                    area: { x: 945, y: 370, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 270, y: 205, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 420, y: 205, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 570, y: 205, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 720, y: 205, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 870, y: 205, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 1020, y: 205, width: mainWidth, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                {
                    area: { x: 100, y: 550, width: 70, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 100, startY: 150, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 450, drawLine: true, move: true },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
            ]
        },
/*1*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true},
                },
                {
                    area: { x: 100, y: 550, width: 100, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: {w: false, h: true}
                },
                {
                    area: { x: 0, y: 450, width: 100, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: {w: false, h: true}
                },
                {
                    area: { x: 100, y: 350, width: 100, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: {w: false, h: true}
                },
                {
                    area: { x: 0, y: 250, width: 100, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 10, y: 10, width: -20, height: -10 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: [
                {
                    area: { x: 200, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
                {
                    area: { x: 800, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
                {
                    area: { x: 200, y: 200, width: 180, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
                {
                    area: { x: 620, y: 200, width: 180, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
                {
                    area: { x: 380, y: 200, width: 20, height: 150 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
                {
                    area: { x: 600, y: 200, width: 20, height: 150 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
                {
                    area: { x: 400, y: 330, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 400, startY: 330, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 300, drawLine: true, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
            ]
        },
/*2*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false},
                },
            ],
            walls: []
        },
/*3*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true},
                },
            ],
            walls: []
        },
/*4*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: false}
                },
            ],
            walls: []
        },
/*5*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*6*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*7*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*8*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*9*/   {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*10*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*11*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*12*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*13*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*14*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*15*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*16*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*17*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*18*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*19*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*20*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*21*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*22*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*23*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        },
/*24*/  {
            grounds: [
                {
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: {w: false, h: true}
                },
            ],
            walls: []
        }
    ]
}

















