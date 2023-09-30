import { AnimationSprite, PlayerSprite, StaticSprite } from "./sprites";


export function initSprites(ctx: CanvasRenderingContext2D): {
    player: PlayerSprite,
    candle: AnimationSprite,
    platform: StaticSprite,
    doors: AnimationSprite[],
} {

    const player = new PlayerSprite({
        position: { x: 0, y: 0 },
        ctx: ctx,
        imageSrc: './SpriteSheets/SantaSprite.png',
        scale: 1.5
    });

    const candle = new AnimationSprite(
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
            startStatic: false
        },
        { x: 5, y: 0 }
    )

    const door1 = new AnimationSprite(
        {
            position: { x: 200, y: (ctx.canvas.height - 114) },
            ctx: ctx,
            imageSrc: './SpriteSheets/WoodDoorSheet.png',
            scale: 1,
            maxFrames: 6,
            maxAnimations: 1,
            frameRate: 10,
            animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
            repeatAnimation: false,
            startStatic: true
        },
        { x: 0, y: 0 }
    )

    const door2 = new AnimationSprite(
        {
            position: { x: 350, y: (ctx.canvas.height - 114) },
            ctx: ctx,
            imageSrc: './SpriteSheets/WoodDoorSheet.png',
            scale: 1,
            maxFrames: 6,
            maxAnimations: 1,
            frameRate: 10,
            animationFrames: [{ x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }],
            repeatAnimation: false,
            startStatic: true
        },
        { x: 0, y: 0 }
    )

    const platform = new StaticSprite(
        {
            position: { x: 500, y: 800 },
            ctx: ctx,
            imageSrc: './Questionmark.png',
            scale: 0.3
        })


    return {
        player: player,
        candle: candle,
        platform: platform,
        doors: [door1, door2]
    }
}