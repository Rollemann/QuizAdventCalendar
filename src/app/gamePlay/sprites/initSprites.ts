import { AnimationSprite } from "./AnimationSprite";
import { PlayerSprite } from "./PlayerSprite";
import { StaticSprite } from "./StaticSprite";
import { AnimationSprites, InitializedSprites, Point } from "./typesForSprites";


export function initSprites(ctx: CanvasRenderingContext2D): InitializedSprites {

    const platforms = createStaticSprites(ctx);

    const animationSprites: AnimationSprites = createAnimationSprites(ctx);

    const player: PlayerSprite = createPlayerSprite(ctx);

    return {
        player: player,
        lights: animationSprites.lights,
        doors: animationSprites.doors,
        items: animationSprites.items,
        platforms: platforms
    }
}

function createStaticSprites(ctx: CanvasRenderingContext2D): StaticSprite[] {
    let platforms = []
    platforms.push(new StaticSprite(
        {
            area: { x: 0, y: 710, width: ctx.canvas.width, height: 10 },
            ctx: ctx,
            imageSrc: './Questionmark.png',
            scale: 1
        }));

    platforms.push(new StaticSprite(
        {
            area: { x: 0, y: 540, width: 100, height: 10 },
            ctx: ctx,
            imageSrc: './Questionmark.png',
            scale: 1
        }));

    return platforms;
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
                dayNumber: i.toString(),
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