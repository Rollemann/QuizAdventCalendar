import { PlayerSprite } from "./sprites";

export function initSprites(ctx: CanvasRenderingContext2D): {
    player: PlayerSprite
} {

    const player = new PlayerSprite({
        position: { x: 0, y: 0 },
        ctx: ctx,
        imageSrc: "./SantaSprite.png",
        scale: 1.5
    });



    return {
        player: player
    }
}