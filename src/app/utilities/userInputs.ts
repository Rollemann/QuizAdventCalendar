export function initInputEvents(canvas: HTMLCanvasElement) {
    document.addEventListener('keydown', (e:KeyboardEvent) => clickHandler(e))
}

function clickHandler (e:KeyboardEvent) {
    console.log('hi');
    
}