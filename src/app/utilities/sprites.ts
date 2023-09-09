

type Point = { x: number, y: number };
export type SpriteProps = { position: Point | null }

class Sprite {
    position: Point;

    constructor(spriteProps: SpriteProps) {
        this.position = spriteProps.position || { x: 0, y: 0 }; 
    };
    
}