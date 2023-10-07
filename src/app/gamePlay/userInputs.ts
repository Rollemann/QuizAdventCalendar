import { AnimationSprite } from "./sprites/AnimationSprite";
import { currentLevel, inputsDisabled } from "./sprites/PlayerSprite";
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
        }
        if (pressedKey == 'd' || pressedKey == 'arrowright') {
            sprites.player.walkRight();
            currentKey = pressedKey;
        }
        if (pressedKey == 'w' || pressedKey == ' ' || pressedKey == 'arrowup') {
            sprites.player.jump();
        }
        if (pressedKey.toLowerCase() == 'f') {
            sprites.levels[currentLevel].animated.lights.forEach((light: AnimationSprite) => {
                light.toggleAnimation();
            });
        }
        if (pressedKey.toLowerCase() == 'e') {
            sprites.levels[currentLevel].animated.doors.forEach((door: AnimationSprite) => {
                if (door.toggleAnimation()) {
                    sprites.player.enterDoor(door.dayNumber);
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
