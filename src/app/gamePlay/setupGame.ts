import { User } from 'firebase/auth';
import { initSprites } from './initSprites';
import { initInputEvents } from './userInputs';
import { levelTimerClass } from './levelTimer';


export let levelTimer: levelTimerClass;

export function setup(canvas : HTMLCanvasElement | null, user: User): {
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
            const sprites = initSprites(ctx, user);
            initInputEvents(sprites);
            levelTimer = new levelTimerClass(user);
            return {
                ctx: ctx,
                sprites: sprites
            };
        }
    }
    return null;
}