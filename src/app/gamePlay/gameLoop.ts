import { canvas } from "../page";
import { AnimationSprite } from "./sprites/AnimationSprite";
import { blackOutLevel, currentLevel } from "./sprites/PlayerSprite";
import { StaticSprite } from "./sprites/StaticSprite";
import { InitializedSprites, SpriteArea } from "./sprites/typesForSprites";

let blackOutOpacity = 0;

export function gameLoop(ctx: CanvasRenderingContext2D, sprites: InitializedSprites, playerInfo: {Name: string, RoomTimes: any}) {
    if (canvas) {
        window.requestAnimationFrame(() => gameLoop(ctx, sprites, playerInfo));
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let groundAreas: SpriteArea[] = [];
        let wallAreas: SpriteArea[] = [];
        
        // update Statics
        sprites.levels[currentLevel].statics.grounds.forEach((ground: StaticSprite) => {
            groundAreas.push(ground.update());
        });
        sprites.levels[currentLevel].statics.walls.forEach((wall: StaticSprite) => {
            wallAreas.push(wall.update());
        });

        // update Animated independed of player position 
        sprites.levels[currentLevel].animated.lights.forEach((light: AnimationSprite) => {
            light.update();
        });

        // update Player
        let playerArea: SpriteArea = sprites.player.update({ groundAreas: groundAreas, wallAreas: wallAreas });

        // update Animated and depending on player position
        sprites.levels[currentLevel].animated.doors.forEach((door: AnimationSprite) => {
            door.updateDoor(playerArea, playerInfo.RoomTimes[door.dayNumber.value]);
        });

        sprites.levels[currentLevel].animated.traps.forEach((trap: AnimationSprite) => {
            trap.updateTrap(playerArea, sprites.player);
        });

        sprites.levels[currentLevel].animated.treasures.forEach((treasure: AnimationSprite) => {
            treasure.updateTreasure(playerArea, playerInfo.RoomTimes[treasure.dayNumber.value]);
        });

        sprites.levels[currentLevel].animated.levers.forEach((lever: AnimationSprite) => {
            lever.updateLever(playerArea);
        });

        sprites.levels[currentLevel].animated.keys.forEach((key: AnimationSprite) => {
            key.updateKey(playerArea);
        });
        
        sprites.player.draw();

        if (blackOutLevel && blackOutOpacity <= 1) {
            blackOutOpacity += 0.005;
            blackOutOpacity = blackOutOpacity < 1 ? blackOutOpacity : 1;
            ctx.globalAlpha = blackOutOpacity;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0;
        }
        else if (!blackOutLevel && blackOutOpacity > 0) {
            blackOutOpacity -= 0.01;
            blackOutOpacity = blackOutOpacity > 0 ? blackOutOpacity : 0;
            ctx.globalAlpha = blackOutOpacity;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.globalAlpha = 1.0;
        }
    }
}