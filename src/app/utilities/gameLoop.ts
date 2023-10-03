import { canvas } from "../page";
import { AnimationSprite, SpriteArea } from "./sprites";

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
        playerArea = sprites.player.update(solidObjectAreas);

        sprites.doors.forEach((door: AnimationSprite) => {
           door.updateInteratable(playerArea);
        });

        sprites.player.draw();
    }
}