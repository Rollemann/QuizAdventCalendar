import { canvas } from "../page";

export function gameLoop(ctx: CanvasRenderingContext2D, sprites: any) {
    if (canvas) {
        window.requestAnimationFrame(() => gameLoop(ctx, sprites));
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        sprites.platform.draw();
        sprites.candle.update();
        sprites.player.update();
    }
}