import { levelTimer } from "./setupGame";
import { AnimationSprite } from "./sprites/AnimationSprite";
import { PlayerSprite, blackOutLevel, currentLevel } from "./sprites/PlayerSprite";
import { StaticSprite } from "./sprites/StaticSprite";
import { InitializedSprites, SpriteArea } from "./sprites/typesForSprites";

let blackOutOpacity = 0;

export function gameLoop(ctx: CanvasRenderingContext2D, sprites: InitializedSprites, background: HTMLImageElement) {
    if (ctx.canvas) {
        window.requestAnimationFrame(() => gameLoop(ctx, sprites, background));
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalAlpha = 0.85;
        ctx.drawImage(background, 0, 0);
        ctx.globalAlpha = 1;

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
            door.updateDoor(playerArea);
        });

        sprites.levels[currentLevel].animated.treasures.forEach((treasure: AnimationSprite) => {
            treasure.updateTreasure(playerArea);
        });

        sprites.levels[currentLevel].animated.levers.forEach((lever: AnimationSprite) => {
            lever.updateLever(playerArea);
        });

        sprites.levels[currentLevel].animated.keys.forEach((key: AnimationSprite) => {
            key.updateKey(playerArea);
        });

        sprites.levels[currentLevel].animated.traps.forEach((trap: AnimationSprite) => {
            trap.updateTrap(playerArea, sprites.player);
        });

        sprites.player.draw();


        drawLevelTimerReadyInfo(ctx);
        drawLevelTimerTime(ctx);
        drawLevelBlackout(ctx, sprites.player);
    }
}

function drawLevelTimerReadyInfo(ctx: CanvasRenderingContext2D) {
    if (levelTimer.isReady && !levelTimer.startTime) {
        const text = "Move to start the timer.";
        ctx.font = "60px Retro Gaming";
        const numberW = ctx.measureText(text).width;
        const posX = ctx.canvas.width / 2 - numberW / 2;
        ctx.fillStyle = "gray";
        ctx.fillRect(posX, ctx.canvas.height / 2 - 55, numberW, 60);
        ctx.fillStyle = "black";
        ctx.fillText(text, posX, ctx.canvas.height / 2);
    }
}

function drawLevelTimerTime(ctx: CanvasRenderingContext2D) {
    if (levelTimer.isReady || levelTimer.isRunning) {
        const timeText = levelTimer.isRunning ? levelTimer.getTimeString() : levelTimer.getInitialTimeOfLevel(currentLevel);
        ctx.font = "32px Retro Gaming";
        const timeW = ctx.measureText(timeText).width;
        const posX = ctx.canvas.width / 2 - timeW / 2;
        ctx.fillStyle = "gray";
        ctx.fillRect(ctx.canvas.width / 2 - 55, 2, 112, 40);
        ctx.fillStyle = "black";
        ctx.fillText(timeText, posX, 34);
    }
}

function drawLevelBlackout(ctx: CanvasRenderingContext2D, player: PlayerSprite) {
    if (blackOutLevel && blackOutOpacity <= 1) {
        blackOutOpacity += 0.005;
        blackOutOpacity = blackOutOpacity < 1 ? blackOutOpacity : 1;
        ctx.fillStyle = "black";
        ctx.globalAlpha = blackOutOpacity;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalAlpha = 1.0;
    }
    else if (!blackOutLevel && blackOutOpacity > 0) {
        blackOutOpacity -= 0.01;
        blackOutOpacity = blackOutOpacity > 0 ? blackOutOpacity : 0;
        ctx.fillStyle = "black";
        ctx.globalAlpha = blackOutOpacity;
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.globalAlpha = 1.0;
        // to make sure the player really starts in the left corner even when its buggy
        if (blackOutOpacity > 0.9) {
            player.position.x = player.startPos.x;
            player.position.y = player.startPos.y;
        }
    }
}