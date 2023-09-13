import { AnimationSprite, PlayerSprite, StaticSprite } from "./sprites";

export function initSprites(ctx: CanvasRenderingContext2D): {
    player: PlayerSprite,
    candle: AnimationSprite,
    platform: StaticSprite
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
            animationFrames: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }]
        },
        { x: 5, y: 0 }
    )

    const platform = new StaticSprite(
        {
            position: { x: 500, y: 750 },
            ctx: ctx,
            imageSrc: './Questionmark.png',
            scale: 0.3
        })


    return {
        player: player,
        candle: candle,
        platform: platform
    }
}