import { AnimationSprite } from "./AnimationSprite";
import { PlayerSprite } from "./PlayerSprite";
import { StaticSprite, StaticSpriteProps } from "./StaticSprite";
import { allStaticSpritesProps } from "./allStaticSprites";
import { AnimationSprites, InitializedSprites, Point, SpriteArea } from "./typesForSprites";


export function initSprites(ctx: CanvasRenderingContext2D): InitializedSprites {

    const platforms: StaticSprite[][] = createStaticSprites(ctx);

    const animationSprites: AnimationSprites = createAnimationSprites(ctx);

    const player: PlayerSprite = createPlayerSprite(ctx);

    return {
        player: player,
        levels: [
            {
                statics: platforms[0],
                animated: {
                    doors: animationSprites.doors,
                    lights: animationSprites.lights,
                    items: animationSprites.items
                }
            },
            {
                statics: platforms[1],
                animated: {
                    doors: animationSprites.doors,
                    lights: animationSprites.lights,
                    items: animationSprites.items
                }
            }
        ]
    }
}

function createStaticSprites(ctx: CanvasRenderingContext2D): StaticSprite[][] {
    let levels: StaticSprite[][] = [];

    const allStaticProps: StaticSpriteProps[][] = allStaticSpritesProps(ctx);
    for (let i = 0; i < allStaticProps.length; ++i) {
        let platforms: StaticSprite[] = [];
        for (let j = 0; j < allStaticProps.length; ++j) {
            platforms.push(new StaticSprite(allStaticProps[i][j]));
        }
        levels.push(platforms);
    }


    /* platforms.push(new StaticSprite(
        {
            area: { x: 0, y: 710, width: ctx.canvas.width, height: 10 },
            ctx: ctx,
            imageSrc: './Questionmark.png',
            scale: 1
        }));

    const mainWidth = 80;
    const mainHeight = 10;
    const allPlatforms: SpriteArea[] = [
        { x: 275, y: 544, width: mainWidth, height: mainHeight },
        { x: 425, y: 544, width: mainWidth, height: mainHeight },
        { x: 575, y: 544, width: mainWidth, height: mainHeight },
        { x: 725, y: 544, width: mainWidth, height: mainHeight },
        { x: 875, y: 544, width: mainWidth, height: mainHeight },
        { x: 1025, y: 544, width: mainWidth, height: mainHeight },
        { x: 200, y: 378, width: mainWidth, height: mainHeight },
        { x: 350, y: 378, width: mainWidth, height: mainHeight },
        { x: 500, y: 378, width: mainWidth, height: mainHeight },
        { x: 650, y: 378, width: mainWidth, height: mainHeight },
        { x: 800, y: 378, width: mainWidth, height: mainHeight },
        { x: 950, y: 378, width: mainWidth, height: mainHeight },
        { x: 275, y: 212, width: mainWidth, height: mainHeight },
        { x: 425, y: 212, width: mainWidth, height: mainHeight },
        { x: 575, y: 212, width: mainWidth, height: mainHeight },
        { x: 725, y: 212, width: mainWidth, height: mainHeight },
        { x: 875, y: 212, width: mainWidth, height: mainHeight },
        { x: 1025, y: 212, width: mainWidth, height: mainHeight },

    ]
    allPlatforms.forEach((platformArea: SpriteArea) => {
        platforms.push(new StaticSprite(
            {
                area: platformArea,
                ctx: ctx,
                imageSrc: './Questionmark.png',
                scale: 1
            }));
    });

    levels.push(platforms);
    platforms = [];

    platforms.push(new StaticSprite(
        {
            area: { x: 0, y: 710, width: ctx.canvas.width, height: 10 },
            ctx: ctx,
            imageSrc: './Questionmark.png',
            scale: 1
        }));
    platforms.push(new StaticSprite(
        {
            area: { x: 275, y: 544, width: mainWidth, height: mainHeight },
            ctx: ctx,
            imageSrc: './Questionmark.png',
            scale: 1
        }));

    levels.push(platforms); */

    return levels;
}

function createAnimationSprites(ctx: CanvasRenderingContext2D): AnimationSprites {
    const lights = createLights(ctx);
    const doors = createDoors(ctx);
    const items = createItems(ctx);

    return { lights: lights, doors: doors, items: items };
}

function createPlayerSprite(ctx: CanvasRenderingContext2D): PlayerSprite {
    const player = new PlayerSprite({
        position: { x: 0, y: 0 },
        ctx: ctx,
        imageSrc: './SpriteSheets/SantaSprite.png',
        scale: 1.5
    });
    return player;
}


function createLights(ctx: CanvasRenderingContext2D): AnimationSprite[] {
    let lights = []
    lights.push(new AnimationSprite(
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
            dayNumber: null,
            hitBoxOffset: { x: 0, y: 0, width: 0, height: 0 }
        },
        { x: 5, y: 0 }
    ));

    return lights;
}

function createDoors(ctx: CanvasRenderingContext2D): AnimationSprite[] {
    let doors = [];
    const allDoorPositions: Point[] = [
        { x: 500, y: (ctx.canvas.height - 124) },
        { x: 425, y: (ctx.canvas.height - 622) },
        { x: 950, y: (ctx.canvas.height - 124) },
        { x: 350, y: (ctx.canvas.height - 456) },
        { x: 650, y: (ctx.canvas.height - 124) },
        { x: 275, y: (ctx.canvas.height - 290) },
        { x: 875, y: (ctx.canvas.height - 290) },
        { x: 200, y: (ctx.canvas.height - 124) },
        { x: 650, y: (ctx.canvas.height - 456) },
        { x: 800, y: (ctx.canvas.height - 456) },
        { x: 275, y: (ctx.canvas.height - 622) },
        { x: 575, y: (ctx.canvas.height - 622) },
        { x: 1025, y: (ctx.canvas.height - 290) },
        { x: 425, y: (ctx.canvas.height - 290) },
        { x: 725, y: (ctx.canvas.height - 622) },
        { x: 575, y: (ctx.canvas.height - 290) },
        { x: 500, y: (ctx.canvas.height - 456) },
        { x: 875, y: (ctx.canvas.height - 622) },
        { x: 200, y: (ctx.canvas.height - 456) },
        { x: 950, y: (ctx.canvas.height - 456) },
        { x: 800, y: (ctx.canvas.height - 124) },
        { x: 1025, y: (ctx.canvas.height - 622) },
        { x: 725, y: (ctx.canvas.height - 290) },
        { x: 350, y: (ctx.canvas.height - 124) },
    ]

    for (let i = 1; i <= allDoorPositions.length; ++i) {

        const door = new AnimationSprite(
            {
                position: allDoorPositions[i - 1],
                ctx: ctx,
                imageSrc: './SpriteSheets/WoodDoorSheet.png',
                scale: 1,
                maxFrames: 6,
                maxAnimations: 1,
                frameRate: 10,
                animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
                repeatAnimation: false,
                startStatic: true,
                dayNumber: i,
                hitBoxOffset: { x: 20, y: 30, width: 40, height: 60 }
            },
            { x: 0, y: 0 }
        )
        doors.push(door);
    }
    return doors;
}

// TODO null raus
function createItems(ctx: CanvasRenderingContext2D): null {
    return null;
}