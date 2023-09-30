import { canvas } from "../page";
import { collisionCheck } from "./collisionCheck";
import { SpriteArea } from "./sprites";

export function gameLoop(ctx: CanvasRenderingContext2D, sprites: any) {
    if (canvas) {
        window.requestAnimationFrame(() => gameLoop(ctx, sprites));
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let playerArea: SpriteArea;
        let solidObjectAreas: SpriteArea[] = [];

        // draw Statics
        solidObjectAreas.push(sprites.platform.draw());

        // update Animated
        sprites.candle.update();

        // update Player
        playerArea = sprites.player.update();

        // collision check
        collisionCheck(playerArea, solidObjectAreas);

        // draw player
        sprites.player.draw();
    }
}