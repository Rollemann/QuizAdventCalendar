import { levelTimer } from "./levelTimer";
import { AnimationSprite } from "./sprites/AnimationSprite";
import { currentLevel, inputsDisabled } from "./sprites/PlayerSprite";
import { StaticSprite } from "./sprites/StaticSprite";
import { InitializedSprites } from "./sprites/typesForSprites";

let currentKey: string;

export function initInputEvents(sprites: InitializedSprites) {
    document.addEventListener('keydown', (e: KeyboardEvent) => keydownHandler(e, sprites));
    document.addEventListener('keyup', (e: KeyboardEvent) => keyupHandler(e, sprites));
}


function keydownHandler(e: KeyboardEvent, sprites: InitializedSprites) {
    if (!inputsDisabled) {
        const pressedKey = e.key.toLowerCase();
        if (pressedKey == 'a' || pressedKey == 'arrowleft') {
            sprites.player.walkLeft();
            currentKey = pressedKey;
            startLevelTimer();
        }
        if (pressedKey == 'd' || pressedKey == 'arrowright') {
            sprites.player.walkRight();
            currentKey = pressedKey;
            startLevelTimer();
        }
        if (pressedKey == 'w' || pressedKey == ' ' || pressedKey == 'arrowup') {
            sprites.player.jump();
            startLevelTimer();
        }

        if (pressedKey.toLowerCase() == 'f') {
            sprites.levels[currentLevel].animated.lights.forEach((light: AnimationSprite) => {
                light.toggleAnimation();
            });
        }

        if (pressedKey.toLowerCase() == 'e') {
            sprites.levels[currentLevel].animated.doors.forEach((door: AnimationSprite) => {
                if (door.toggleDoor(currentLevel)) {
                    sprites.player.enterDoor(door.dayNumber.value);
                }
            });
            sprites.levels[currentLevel].animated.treasures.forEach((treasure: AnimationSprite) => {
                if (treasure.toggleTreasure()) {
                    sprites.player.openTreasure();
                }
            });
            sprites.levels[currentLevel].animated.levers.forEach((lever: AnimationSprite) => {
                if (lever.toggleAnimation()) {
                    sprites.levels[currentLevel].animated.traps.forEach((trap: AnimationSprite) => {
                        trap.toggleMovement();
                    });
                    sprites.levels[currentLevel].statics.walls.forEach((wall: StaticSprite) => {
                        wall.toggleMovement();
                    });
                }
            });
            sprites.levels[currentLevel].animated.keys.forEach((key: AnimationSprite) => {
                if (key.toggleAnimation()) {
                    key.collectKey();
                }
            });
        }
    }
}

function keyupHandler(e: KeyboardEvent, sprites: any) {
    const pressedKey = e.key.toLowerCase();
    if (pressedKey == currentKey) {
        sprites.player.stop();
    }
}

function startLevelTimer() {
    if (levelTimer.isReady) {
        levelTimer.startTimer();
    }
}