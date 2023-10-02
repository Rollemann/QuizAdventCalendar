export type Position = { x: number, y: number };

export function shapeDrawer(startPoint: Position, edgeList: number[], pixelSize:number): string {
    let shape: string = `M ${startPoint.x},${startPoint.y} `;
    for (let i: number = 0; i < edgeList.length; ++i) {
        const scale = edgeList[i] * pixelSize;
        shape += (i % 2 == 0) ? `l ${scale},0 ` : `l 0,${scale} `;
    }
    return shape;
}