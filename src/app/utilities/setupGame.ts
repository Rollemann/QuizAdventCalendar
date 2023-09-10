import { initSprites } from './initSprites';
import { canvas } from '../page';

export function setup(): {
    ctx: CanvasRenderingContext2D,
    sprites: any;
} | null {

    if (canvas) {
        let ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx) {
            ctx.canvas.height = canvas?.clientHeight || 1080;
            ctx.canvas.width = canvas?.clientWidth || 1920;
            const sprites = initSprites(ctx);
            return {
                ctx: ctx,
                sprites: sprites
            };
        }
    }
    return null;
}