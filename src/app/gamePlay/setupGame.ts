import { User } from 'firebase/auth';
import { initSprites } from './initSprites';
import { initInputEvents } from './userInputs';
import { levelTimerClass } from './levelTimer';
import { PlayerTime } from '../components/transformDBContentForUI';


export let levelTimer: levelTimerClass;

export function setup(canvas: HTMLCanvasElement | null, user: User, allUserTimes: PlayerTime[]): {
    ctx: CanvasRenderingContext2D,
    sprites: any;
} | null {

    if (canvas) {
        canvas.style.height = window.innerHeight.toString() + "px";
        canvas.style.width = (16 * (window.innerHeight / 9)).toString() + "px";
        let ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
        if (ctx) {
            ctx.canvas.width = 1280;
            ctx.canvas.height = 720;
            const sprites = initSprites(ctx, user);
            initInputEvents(sprites);
            levelTimer = new levelTimerClass(user, allUserTimes);
            return {
                ctx: ctx,
                sprites: sprites
            };
        }
    }
    return null;
}