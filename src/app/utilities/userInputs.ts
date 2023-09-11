import { PlayerSprite } from "./sprites";

export function initInputEvents(sprites: {
    player: PlayerSprite
}) {
    document.addEventListener('keydown', (e: KeyboardEvent) => keydownHandler(e, sprites));
    document.addEventListener('keyup', (e: KeyboardEvent) => keyupHandler(e, sprites));
}

function keydownHandler(e: KeyboardEvent, sprites: any) {
    if (e.key == 'a' || e.key == 'ArrowLeft') {
        sprites.player.walkAnim('left');
    }
    if (e.key == 'd' || e.key == 'ArrowRight') {
        sprites.player.walkAnim('right');
    }
}

function keyupHandler(e: KeyboardEvent, sprites: any) {
    sprites.player.idleAnim();
}
