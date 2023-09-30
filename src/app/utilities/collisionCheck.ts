import { SpriteArea } from "./sprites";

export function collisionCheck(playerArea: SpriteArea, solidObjectAreas: SpriteArea[]): number | null {
    for (let i: number = 0; i < solidObjectAreas.length; ++i) {
        const xCollide = playerArea.x < solidObjectAreas[i].x + solidObjectAreas[i].width && playerArea.x + playerArea.width > solidObjectAreas[i].x;
        const yCollide = playerArea.y < solidObjectAreas[i].y + solidObjectAreas[i].height && playerArea.y + playerArea.height > solidObjectAreas[i].y;

        console.log(`${playerArea.x}|||${playerArea.x + playerArea.width}|||${solidObjectAreas[i].x}|||${solidObjectAreas[i].x + solidObjectAreas[i].width}`);
        
        if(xCollide && yCollide){
            return i;
        }
        
    }
    return null;
} 