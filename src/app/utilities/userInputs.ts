import { PlayerSprite } from "./sprites";

let currentKey: string;

export function initInputEvents(sprites: {
    player: PlayerSprite
}) {
    document.addEventListener('keydown', (e: KeyboardEvent) => keydownHandler(e, sprites));
    document.addEventListener('keyup', (e: KeyboardEvent) => keyupHandler(e, sprites));
}

function keydownHandler(e: KeyboardEvent, sprites: any) {
    if (e.key == 'a' || e.key == 'ArrowLeft') {
        sprites.player.walkLeft();
        currentKey = e.key;
    }
    if (e.key == 'd' || e.key == 'ArrowRight') {
        sprites.player.walkRight();
        currentKey = e.key;
    }
    if (e.key == "w" || e.key == " " || e.key == "ArrowUp") {
        sprites.player.jump();
    }
}

function keyupHandler(e: KeyboardEvent, sprites: any) {
    if (e.key == currentKey) {
        sprites.player.stop();
    }
}
