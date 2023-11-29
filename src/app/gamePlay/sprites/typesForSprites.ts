import { AnimationSprite, AnimationSpriteProps } from "./AnimationSprite";
import { PlayerSprite } from "./PlayerSprite";
import { StaticSprite, StaticSpriteProps } from "./StaticSprite";

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

export type InitializedSprites = {
    player: PlayerSprite,
    levels: nonePlayerSprites[],
};

export type nonePlayerSprites = {
    statics: StaticSprites,
    animated: AnimationSprites
}

export type StaticSprites = {
    grounds: StaticSprite[],
    walls: StaticSprite[],
}

export type StaticTypesProps = {
    grounds: StaticSpriteProps[],
    walls: StaticSpriteProps[],
}

export type AnimationSprites = {
    lights: AnimationSprite[],
    gifts: AnimationSprite[],
    doors: AnimationSprite[],
    keys: AnimationSprite[],
    traps: AnimationSprite[],
    treasures: AnimationSprite[],
    levers: AnimationSprite[]
};

export type AnimationTypesProps = {
    lights: AnimationSpriteProps[],
    gifts: AnimationSpriteProps[],
    doors: AnimationSpriteProps[],
    keys: AnimationSpriteProps[],
    traps: AnimationSpriteProps[],
    treasures: AnimationSpriteProps[],
    levers: AnimationSpriteProps[]
}

export type MoveProps = {
    startX: number,
    startY: number,
    velocityX: number,
    velocityY: number,
    rangeX: number,
    rangeY: number,
    drawLine: boolean,
    move: boolean
}