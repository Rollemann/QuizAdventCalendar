import { StaticTypesProps } from "./typesForSprites";

//TODO: Check all carpets are right displayed; lifts cant put him underground; Alle Figuren stehen bis zur hälfte in den Boden rein, schlater auf rot oder grün je nach dem ob sich alles bewegt oder nicht
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: false }
                },
            ]
        },
/*1*/   {
            grounds: [
                { // ground
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left I
                    area: { x: 400, y: 550, width: 90, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left I
                    area: { x: 400, y: 400, width: 90, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right I
                    area: { x: 510, y: 550, width: 90, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right I
                    area: { x: 510, y: 400, width: 90, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 50, y: 550, width: 40, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 100, y: 400, width: 40, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 150, y: 250, width: 40, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                { // Bottom -
                    area: { x: 400, y: 690, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // Top -
                    area: { x: 400, y: 200, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // |
                    area: { x: 490, y: 220, width: 20, height: 470 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
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
                    imageWholeSize: { w: false, h: true }
                },
                { // left W
                    area: { x: 400, y: 600, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right W
                    area: { x: 660, y: 600, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                { // | left
                    area: { x: 300, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | middle
                    area: { x: 560, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | right
                    area: { x: 820, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // - left
                    area: { x: 320, y: 690, width: 240, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // - right
                    area: { x: 580, y: 690, width: 240, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift left
                    area: { x: 250, y: 400, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 250, startY: 200, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 400, drawLine: true, move: true },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift middle
                    area: { x: 510, y: 400, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 510, startY: 200, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 400, drawLine: true, move: true },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift right
                    area: { x: 770, y: 400, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 770, startY: 200, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 400, drawLine: true, move: true },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true }
                },
                { // left left
                    area: { x: 0, y: 600, width: 60, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left left
                    area: { x: 0, y: 400, width: 60, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left left
                    area: { x: 0, y: 200, width: 60, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left right
                    area: { x: 150, y: 500, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left right
                    area: { x: 150, y: 300, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left right
                    area: { x: 300, y: 300, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                { // |
                    area: { x: 550, y: 310, width: 20, height: 400 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift left
                    area: { x: 500, y: 310, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 500, startY: 310, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 350, drawLine: true, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 0, y: 600, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 100, y: 500, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 200, y: 400, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 300, y: 300, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 400, y: 200, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right
                    area: { x: 900, y: 445, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                { // - Top
                    area: { x: 500, y: 200, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | left
                    area: { x: 500, y: 220, width: 20, height: 225 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // - middle
                    area: { x: 500, y: 445, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | right
                    area: { x: 680, y: 465, width: 20, height: 225 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // - bottom
                    area: { x: 500, y: 690, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift
                    area: { x: 700, y: 445, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 700, startY: 200, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 245, drawLine: true, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 320, y: 300, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // left
                    area: { x: 320, y: 580, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // middle
                    area: { x: 485, y: 400, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                { // -
                    area: { x: 420, y: 480, width: 230, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 360, startY: 480, velocityX: 0.5, velocityY: 0, rangeX: 120, rangeY: 0, drawLine: false, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | left
                    area: { x: 400, y: 250, width: 20, height: 460 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | right
                    area: { x: 650, y: 250, width: 20, height: 460 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true }
                },
                { // left Y
                    area: { x: 370, y: 280, width: 30, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right Y
                    area: { x: 620, y: 280, width: 30, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                { // | middle
                    area: { x: 500, y: 400, width: 20, height: 310 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // - 
                    area: { x: 350, y: 380, width: 320, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | left
                    area: { x: 350, y: 200, width: 20, height: 180 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | right
                    area: { x: 650, y: 200, width: 20, height: 180 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift
                    area: { x: 300, y: 300, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 300, startY: 200, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 410, drawLine: true, move: true },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: []
        },
/*9*/   {
            grounds: [
                { // ground
                    area: { x: 0, y: 700, width: ctx.canvas.width, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: true },
                },
                {
                    area: { x: 100, y: 550, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 0, y: 450, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 100, y: 350, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                {
                    area: { x: 0, y: 250, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // in M
                    area: { x: 320, y: 300, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // in M
                    area: { x: 620, y: 300, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right
                    area: { x: 820, y: 580, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right
                    area: { x: 820, y: 450, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
                { // right
                    area: { x: 820, y: 320, width: 80, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: [
                { //left |
                    area: { x: 200, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { //right |
                    area: { x: 800, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // left -
                    area: { x: 220, y: 200, width: 180, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // right -
                    area: { x: 620, y: 200, width: 180, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // middle left |
                    area: { x: 400, y: 200, width: 20, height: 150 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // middle right |
                    area: { x: 600, y: 200, width: 20, height: 150 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // middle lift
                    area: { x: 420, y: 330, width: 180, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 420, startY: 330, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 300, drawLine: true, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // left lift
                    area: { x: 220, y: 330, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 220, startY: 330, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 300, drawLine: true, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // right lift
                    area: { x: 750, y: 330, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 750, startY: 330, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 300, drawLine: true, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true },
                },
                { // left
                    area: { x: 0, y: 650, width: 50, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                { // left
                    area: { x: 0, y: 500, width: 50, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                { // left
                    area: { x: 0, y: 350, width: 50, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                { // left
                    area: { x: 0, y: 200, width: 50, height: mainHeight },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
            ],
            walls: [
                { // |
                    area: { x: 400, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // Top
                    area: { x: 420, y: 200, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // Middle
                    area: { x: 420, y: 445, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // Bottom
                    area: { x: 420, y: 690, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift | left
                    area: { x: 350, y: 610, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 350, startY: 200, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 410, drawLine: true, move: false },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift - right
                    area: { x: 450, y: 550, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 450, startY: 550, velocityX: 1, velocityY: 0, rangeX: 200, rangeY: 0, drawLine: true, move: true },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true },
                },
                {
                    area: { x: 300, y: 350, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                {
                    area: { x: 0, y: 550, width: 150, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                {
                    area: { x: 0, y: 400, width: 150, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                {
                    area: { x: 0, y: 250, width: 150, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                {
                    area: { x: 200, y: 200, width: 150, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                { // right
                    area: { x: 780, y: 200, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                { // right
                    area: { x: 980, y: 200, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },
                { // right
                    area: { x: 1180, y: 200, width: 100, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/carpetSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 10, width: 0, height: -10 },
                    imageWholeSize: { w: false, h: true },
                },

            ],
            walls: [
                { // | links
                    area: { x: 400, y: 200, width: 20, height: 510 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // - oben
                    area: { x: 420, y: 200, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // - unten
                    area: { x: 420, y: 400, width: 200, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | rechts oben
                    area: { x: 620, y: 200, width: 20, height: 220 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | rechts mitte
                    area: { x: 530, y: 420, width: 20, height: 145 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // | rechts unten
                    area: { x: 550, y: 545, width: 20, height: 165 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalVSprite.png',
                    scale: 1,
                    moveProps: null,
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
                { // lift
                    area: { x: 1230, y: 600, width: 50, height: 20 },
                    ctx: ctx,
                    imageSrc: './SpriteSheets/metalHSprite.png',
                    scale: 1,
                    moveProps: { startX: 1230, startY: 250, velocityX: 0, velocityY: 1, rangeX: 0, rangeY: 350, drawLine: true, move: true },
                    hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 },
                    imageWholeSize: { w: false, h: false }
                },
            ]
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
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
                    imageWholeSize: { w: false, h: true }
                },
            ],
            walls: []
        }
    ]
}

















