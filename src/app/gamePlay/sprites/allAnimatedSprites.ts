import { AnimationTypesProps } from "./typesForSprites";


export function allAnimationSpritesProps(ctx: CanvasRenderingContext2D): AnimationTypesProps[] {
    return [
        {
            lights: [
                {
                    position: { x: 100, y: 100 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/CandleSheet.png',
                    scale: 0.5,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: -1,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 }
                },
                {
                    position: { x: 130, y: 100 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/CandleSheet.png',
                    scale: 0.5,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: -1,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 }

                }
            ],
            doors: [
                {
                    position: { x: 500, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 1,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 425, y: (ctx.canvas.height - 622) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 2,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 950, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 3,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 350, y: (ctx.canvas.height - 456) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 4,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 650, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 5,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 275, y: (ctx.canvas.height - 290) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 6,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 875, y: (ctx.canvas.height - 290) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 7,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 200, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 8,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 650, y: (ctx.canvas.height - 456) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 9,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 800, y: (ctx.canvas.height - 456) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 10,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 275, y: (ctx.canvas.height - 622) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 11,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 575, y: (ctx.canvas.height - 622) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 12,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 1025, y: (ctx.canvas.height - 290) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 13,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 425, y: (ctx.canvas.height - 290) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 14,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 725, y: (ctx.canvas.height - 622) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 15,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 575, y: (ctx.canvas.height - 290) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 16,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 500, y: (ctx.canvas.height - 456) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 17,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 875, y: (ctx.canvas.height - 622) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 18,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 200, y: (ctx.canvas.height - 456) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 19,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 950, y: (ctx.canvas.height - 456) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 20,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 800, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 21,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 1025, y: (ctx.canvas.height - 622) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 22,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 725, y: (ctx.canvas.height - 290) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 23,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                },
                {
                    position: { x: 350, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 24,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                }
            ],
            items: [

            ]
        },
        {
            lights: [
                {
                    position: { x: 100, y: 100 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/CandleSheet.png',
                    scale: 0.5,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: -1,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 }

                },
                {
                    position: { x: 130, y: 100 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/CandleSheet.png',
                    scale: 0.5,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: -1,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 }

                },
            ],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 290) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: 0,
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 }
                }
            ],
            items: [

            ]
        }
    ]
}

















