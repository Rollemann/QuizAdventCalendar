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

        let groundAreas: SpriteArea[] = [];
        let wallAreas: SpriteArea[] = [];

        // draw Statics
        sprites.levels[currentLevel].statics.grounds.forEach((platform: StaticSprite) => {
            groundAreas.push(platform.draw());
        });
        sprites.levels[currentLevel].statics.walls.forEach((platform: StaticSprite) => {
            wallAreas.push(platform.draw());
        });

        // update Animated
        sprites.levels[currentLevel].animated.lights.forEach((light: AnimationSprite) => {
            light.update();
        });

        // update Player
        let playerArea: SpriteArea = sprites.player.update({ groundAreas: groundAreas, wallAreas: wallAreas });

        // update Animated and depending on player position
        sprites.levels[currentLevel].animated.doors.forEach((door: AnimationSprite) => {
            door.updateInteractable(playerArea);
        });

        sprites.levels[currentLevel].animated.traps.forEach((trap: AnimationSprite) => {
            trap.updateKillable(playerArea, sprites.player);
        });

        sprites.levels[currentLevel].animated.treasures.forEach((treasure: AnimationSprite) => {
            treasure.updateInteractable(playerArea)
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