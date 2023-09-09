import React from 'react'

export function setup(canvas: HTMLCanvasElement | null):CanvasRenderingContext2D | null {

    let ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext("2d");
    if (ctx) {
        ctx.canvas.height = canvas?.clientHeight || 1080;
        ctx.canvas.width = canvas?.clientWidth || 1920;
        return ctx;
    }
    return null;
}