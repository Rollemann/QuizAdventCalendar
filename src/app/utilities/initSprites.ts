import { Sprite } from "./sprite";

export function initSprites(ctx: CanvasRenderingContext2D): {
    player: Sprite
} {

    const player = new Sprite({
        position: { x: 0, y: 0 },
        ctx: ctx,
        imageSrc: "./SantaSprite.png",
        scale: 1
    });



    return {
        player: player
    }
}