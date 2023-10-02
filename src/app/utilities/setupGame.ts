import { initSprites } from './initSprites';
import { canvas } from '../page';
import { initInputEvents } from './userInputs';

export function setup(): {
    ctx: CanvasRenderingContext2D,
    sprites: any;
} | null {

    if (canvas) {
        canvas.style.height = window.innerHeight.toString() + "px";
        canvas.style.width = (16 * (window.innerHeight / 9)).toString() + "px";
        // TODO das hier oben
        let ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx) {
            ctx.canvas.width = 1280;
            ctx.canvas.height = 720;
            const sprites = initSprites(ctx);
            initInputEvents(sprites);
            return {
                ctx: ctx,
                sprites: sprites
            };
        }
    }
    return null;
}