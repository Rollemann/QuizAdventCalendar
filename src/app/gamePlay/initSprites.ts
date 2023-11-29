import { User } from "firebase/auth";
import { AnimationSprite, AnimationSpriteProps } from "./sprites/AnimationSprite";
import { PlayerSprite } from "./sprites/PlayerSprite";
import { StaticSprite, StaticSpriteProps } from "./sprites/StaticSprite";
import { allAnimationSpritesProps } from "./sprites/allAnimatedSprites";
import { allStaticSpritesProps } from "./sprites/allStaticSprites";
import { AnimationSprites, AnimationTypesProps, InitializedSprites, StaticSprites, StaticTypesProps, nonePlayerSprites } from "./sprites/typesForSprites";


export function initSprites(ctx: CanvasRenderingContext2D, user: User): InitializedSprites {

    const staticSprites: StaticSprites[] = createStaticSprites(ctx);

    const animationSprites: AnimationSprites[] = createAnimationSprites(ctx);

    const player: PlayerSprite = createPlayerSprite(ctx, user);

    let levels: nonePlayerSprites[] = []
    for (let i = 0; i < staticSprites.length; ++i) {
        levels.push(
            {
                statics: staticSprites[i],
                animated: animationSprites[i],
            }
        )
    }

    return {
        player: player,
        levels: levels
    }
}

function createStaticSprites(ctx: CanvasRenderingContext2D): StaticSprites[] {
    let levels: StaticSprites[] = [];

    const allStaticProps: StaticTypesProps[] = allStaticSpritesProps(ctx);
    for (let i = 0; i < allStaticProps.length; ++i) {
        const currentStaticProps: StaticTypesProps = allStaticProps[i];
        const grounds = createStaticSpriteType(currentStaticProps.grounds);
        const walls = createStaticSpriteType(currentStaticProps.walls);
        levels.push({ grounds: grounds, walls: walls });
    }
    return levels;
}

function createAnimationSprites(ctx: CanvasRenderingContext2D): AnimationSprites[] {
    let levels: AnimationSprites[] = [];

    const allAnimationProps: AnimationTypesProps[] = allAnimationSpritesProps(ctx);
    for (let i = 0; i < allAnimationProps.length; ++i) {
        const currentAnimationProps: AnimationTypesProps = allAnimationProps[i];
        const lights = createAnimationSpriteType(currentAnimationProps.lights);
        const gifts = createAnimationSpriteType(currentAnimationProps.gifts);
        const doors = createAnimationSpriteType(currentAnimationProps.doors);
        const keys = createAnimationSpriteType(currentAnimationProps.keys);
        const traps = createAnimationSpriteType(currentAnimationProps.traps);
        const treasures = createAnimationSpriteType(currentAnimationProps.treasures);
        const levers = createAnimationSpriteType(currentAnimationProps.levers);
        levels.push({ lights: lights, gifts: gifts, doors: doors, keys: keys, traps: traps, treasures: treasures, levers: levers });
    }
    return levels;
}

function createAnimationSpriteType(properties: AnimationSpriteProps[]): AnimationSprite[] {
    let allObjects: AnimationSprite[] = [];
    properties.forEach((property: AnimationSpriteProps) => {
        allObjects.push(new AnimationSprite(property));
    });
    return allObjects;
}

function createStaticSpriteType(properties: StaticSpriteProps[]): StaticSprite[] {
    let allObjects: StaticSprite[] = [];
    properties.forEach((property: StaticSpriteProps) => {
        allObjects.push(new StaticSprite(property));
    });
    return allObjects;
}

function createPlayerSprite(ctx: CanvasRenderingContext2D, user: User): PlayerSprite {
    const player = new PlayerSprite({
        position: { x: 0, y: 0 },
        ctx: ctx,
        imageSrc: './SpriteSheets/SantaSprite.png',
        scale: 1.5
    },
        user);
    return player;
}