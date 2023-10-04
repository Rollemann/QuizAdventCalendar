import { SpriteArea } from "./sprites/typesForSprites";

export function collisionCheck(playerArea: SpriteArea, solidObjectAreas: SpriteArea[]): number {
    for (let i: number = 0; i < solidObjectAreas.length; ++i) {
        const xCollide = playerArea.x < solidObjectAreas[i].x + solidObjectAreas[i].width && playerArea.x + playerArea.width > solidObjectAreas[i].x;
        if (xCollide) {
            const yCollide = playerArea.y < solidObjectAreas[i].y + solidObjectAreas[i].height && playerArea.y + playerArea.height > solidObjectAreas[i].y;
            if (yCollide) {
                return i;
            }
        }
    }
    return -1;
} 