import { AnimationTypesProps } from "./typesForSprites";

// TODO: Check all Keys are in Motion
export function allAnimationSpritesProps(ctx: CanvasRenderingContext2D): AnimationTypesProps[] {
    return [
/*0*/   {
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
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 },
                    moveProps: null

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
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 2, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 3, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 4, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 5, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 6, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 7, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 8, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 9, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 10, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 11, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 12, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 13, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 14, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 15, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 16, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 17, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 18, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 19, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 20, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 21, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 22, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 23, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: true, value: 24, color: "black", size: 32, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [],
            traps: [],
            treasures: [],
            levers: [
                {
                    position: { x: 100, y: 665 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/leversSprite.png',
                    scale: 0.1,
                    maxFrames: 2,
                    maxAnimations: 1,
                    frameRate: 100,
                    animationFrames: [{ x: 1, y: 0 }],
                    repeatAnimation: false,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
            ]
        },
/*1*/   {
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
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 },
                    moveProps: null
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
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 5, y: 0 },
                    moveProps: null
                },
            ],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [
                { // saw
                    position: { x: 1000, y: 600 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: true,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 1000, startY: 600, velocityX: 3, velocityY: 0, rangeX: 100, rangeY: 0, drawLine: true, move: false }
                },
                { // saw
                    position: { x: 1100, y: 650 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: true,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 1000, startY: 650, velocityX: 3, velocityY: 0, rangeX: 100, rangeY: 0, drawLine: true, move: false }
                },
                {
                    position: { x: 280, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 310, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 340, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 370, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 400, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 600, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 630, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 660, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 690, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 720, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
            ],
            treasures: [
                {
                    position: { x: 620, y: 225 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: [
                {
                    position: { x: 760, y: 155 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/leversSprite.png',
                    scale: 0.1,
                    maxFrames: 2,
                    maxAnimations: 1,
                    frameRate: 100,
                    animationFrames: [{ x: 1, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
            ]
        },
/*2*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 480, y: 640 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 2, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 480, startY: 640, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [
                { // saw
                    position: { x: 580, y: 230 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: true,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 580, startY: 230, velocityX: 0, velocityY: 1.5, rangeX: 0, rangeY: 170, drawLine: true, move: false }
                },
                {
                    position: { x: 630, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 660, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 690, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 800, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 830, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 860, y: 690 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
            ],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 2, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: [
                {
                    position: { x: 0, y: 155 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/leversSprite.png',
                    scale: 0.1,
                    maxFrames: 2,
                    maxAnimations: 1,
                    frameRate: 100,
                    animationFrames: [{ x: 1, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
            ]
        },
/*3*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 560, y: 480 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 3, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 560, startY: 480, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [
                { // saw
                    position: { x: 0, y: 530 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 0, startY: 530, velocityX: 1, velocityY: 0, rangeX: 110, rangeY: 0, drawLine: true, move: true }
                },
                { // saw
                    position: { x: 110, y: 380 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 0, startY: 380, velocityX: 1, velocityY: 0, rangeX: 110, rangeY: 0, drawLine: true, move: true }
                },
                { // saw
                    position: { x: 0, y: 230 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 0, startY: 230, velocityX: 1, velocityY: 0, rangeX: 110, rangeY: 0, drawLine: true, move: true }
                },
                { // saw
                    position: { x: 200, y: 180 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 200, startY: 180, velocityX: 1, velocityY: 0, rangeX: 110, rangeY: 0, drawLine: true, move: true }
                },
                { // saw
                    position: { x: 700, y: 650 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/sawSprite.png',
                    scale: 0.1,
                    maxFrames: 5,
                    maxAnimations: 1,
                    frameRate: 2,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 700, startY: 650, velocityX: 4, velocityY: 0, rangeX: 280, rangeY: 0, drawLine: true, move: true }
                },
                {
                    position: { x: 300, y: 330 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 335, y: 330 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
                {
                    position: { x: 370, y: 330 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/candyBarTrap.png',
                    scale: 1,
                    maxFrames: 13,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }, { x: 12, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: false, value: -1, color: "black", size: 0, yOffset: 0 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                },
            ],
            treasures: [
                {
                    position: { x: 320, y: 625 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 3, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*4*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*5*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*6*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*7*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*8*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*9*/   {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*10*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*11*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*12*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*13*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*14*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*15*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*16*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*17*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*18*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*19*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*20*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*21*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*22*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*23*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        },
/*24*/  {
            lights: [],
            doors: [
                {
                    position: { x: 1025, y: (ctx.canvas.height - 124) },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/WoodDoorSheet.png',
                    scale: 1,
                    maxFrames: 6,
                    maxAnimations: 1,
                    frameRate: 10,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 0, color: "black", size: 16, yOffset: 45 },
                    hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            keys: [
                {
                    position: { x: 355, y: 260 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/keySprite.png',
                    scale: 0.05,
                    maxFrames: 10,
                    maxAnimations: 1,
                    frameRate: 5,
                    animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }],
                    repeatAnimation: true,
                    startStatic: false,
                    dayNumber: { isDisplayed: true, value: 1, color: "black", size: 16, yOffset: -100 },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: { startX: 340, startY: 260, velocityX: 0, velocityY: 0.2, rangeX: 0, rangeY: 10, drawLine: false, move: true }
                }
            ],
            traps: [],
            treasures: [
                {
                    position: { x: 450, y: 365 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/treasureSprite.png',
                    scale: 2,
                    maxFrames: 12,
                    maxAnimations: 1,
                    frameRate: 14,
                    animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }, { x: 11, y: 0 }],
                    repeatAnimation: false,
                    startStatic: true,
                    dayNumber: { isDisplayed: true, value: 1, color: "white", size: 16, yOffset: 25 },
                    hitBoxOffset: { x: 0, y: 15, width: 0, height: 15 },
                    staticFrame: { x: 0, y: 0 },
                    moveProps: null
                }
            ],
            levers: []
        }
    ]
}