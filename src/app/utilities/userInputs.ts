import { PlayerSprite } from "./sprites";

let currentKey: string;

export function initInputEvents(sprites: {
    player: PlayerSprite
}) {
    document.addEventListener('keydown', (e: KeyboardEvent) => keydownHandler(e, sprites));
    document.addEventListener('keyup', (e: KeyboardEvent) => keyupHandler(e, sprites));
}

function keydownHandler(e: KeyboardEvent, sprites: any) {
    const pressedKey  = e.key.toLowerCase();
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
        sprites.candle.toggleAnimation();
    }
}

function keyupHandler(e: KeyboardEvent, sprites: any) {
    const pressedKey  = e.key.toLowerCase();
    if (pressedKey == currentKey) {
        sprites.player.stop();        
    }
}
