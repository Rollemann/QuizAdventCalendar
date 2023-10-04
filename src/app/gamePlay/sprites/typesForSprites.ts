import { AnimationSprite } from "./AnimationSprite";
import { PlayerSprite } from "./PlayerSprite";
import { StaticSprite } from "./StaticSprite";

export type Point = {
    x: number,
    y: number
};
export type SpriteArea = {
    x: number,
    y: number,
    width: number,
    height: number
};

export type AnimationSprites = {
    lights: AnimationSprite[],
    doors: AnimationSprite[],
    items: AnimationSprite[] | null // TODO null raus
};

export type InitializedSprites = {
    player: PlayerSprite,
    lights: AnimationSprite[],
    doors: AnimationSprite[],
    items: AnimationSprite[] | null, // TODO null raus
    platforms: StaticSprite[],
};








