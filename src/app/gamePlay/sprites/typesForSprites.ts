import { AnimationSprite, AnimationSpriteProps } from "./AnimationSprite";
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
    items: AnimationSprite[],
    traps: AnimationSprite[],
    treasures: AnimationSprite[]
};

export type InitializedSprites = {
    player: PlayerSprite,
    levels: nonePlayerSprites[],
};

export type nonePlayerSprites = {
    statics: StaticSprite[],
    animated: AnimationSprites
}

export type AnimationTypesProps = {
    lights: AnimationSpriteProps[],
    doors: AnimationSpriteProps[],
    items: AnimationSpriteProps[],
    traps: AnimationSpriteProps[],
    treasures: AnimationSpriteProps[]
}

export type MoveProps = {
    velocityX: number,
    velocityY: number,
    rangeX: number,
    rangeY: number
}