import { canvas } from "../page";
import { AnimationSprite } from "./sprites/AnimationSprite";
import { StaticSprite } from "./sprites/StaticSprite";
import { InitializedSprites, SpriteArea } from "./sprites/typesForSprites";

export function gameLoop(ctx: CanvasRenderingContext2D, sprites: InitializedSprites) {
    if (canvas) {
        window.requestAnimationFrame(() => gameLoop(ctx, sprites));
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let playerArea: SpriteArea;
        let solidObjectAreas: SpriteArea[] = [];

        // draw Statics
        sprites.platforms.forEach((platform: StaticSprite) => {
            solidObjectAreas.push(platform.draw());
        });

        // update Animated
        sprites.lights.forEach((light: AnimationSprite) => {
            light.update();
        });

        // update Player
        playerArea = sprites.player.update(solidObjectAreas);

        sprites.doors.forEach((door: AnimationSprite) => {
            door.updateInteratable(playerArea);
        });

        sprites.player.draw();
    }
}