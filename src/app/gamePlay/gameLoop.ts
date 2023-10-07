import { canvas } from "../page";
import { AnimationSprite } from "./sprites/AnimationSprite";
import { blackOutLevel, currentLevel } from "./sprites/PlayerSprite";
import { StaticSprite } from "./sprites/StaticSprite";
import { InitializedSprites, SpriteArea } from "./sprites/typesForSprites";

let blackOutOpacity = 0;

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

        if (blackOutLevel && blackOutOpacity <= 1) {
            blackOutOpacity += 0.005;
            blackOutOpacity = blackOutOpacity < 1 ? blackOutOpacity : 1;
            ctx.globalAlpha = blackOutOpacity;
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.globalAlpha = 1.0;
        }
        else if (!blackOutLevel && blackOutOpacity > 0) {
            blackOutOpacity -= 0.01;
            blackOutOpacity = blackOutOpacity > 0 ? blackOutOpacity : 0;
            ctx.globalAlpha = blackOutOpacity;
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.globalAlpha = 1.0;
        }
    }
}