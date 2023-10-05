import { canvas } from "../page";
import { AnimationSprite } from "./sprites/AnimationSprite";
import { StaticSprite } from "./sprites/StaticSprite";
import { InitializedSprites, SpriteArea } from "./sprites/typesForSprites";

export let currentLevel = 0;
export function gameLoop(ctx: CanvasRenderingContext2D, sprites: InitializedSprites) {
    if (canvas) {
        window.requestAnimationFrame(() => gameLoop(ctx, sprites));
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let solidObjectAreas: SpriteArea[] = [];

        // draw Statics
        sprites.levels[currentLevel].statics.forEach((platform: StaticSprite) => {
            solidObjectAreas.push(platform.draw());
        });

        // update Animated
        sprites.levels[currentLevel].animated.lights.forEach((light: AnimationSprite) => {
            light.update();
        });

        // update Player
        let playerArea: SpriteArea = sprites.player.update(solidObjectAreas);

        sprites.levels[currentLevel].animated.doors.forEach((door: AnimationSprite) => {
            door.updateInteratable(playerArea);
        });

        sprites.player.draw();
    }
}