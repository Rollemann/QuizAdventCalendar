import { AnimationSprite, AnimationSpriteProps } from "./AnimationSprite";
import { PlayerSprite } from "./PlayerSprite";
import { StaticSprite, StaticSpriteProps } from "./StaticSprite";
import { allAnimationSpritesProps } from "./allAnimatedSprites";
import { allStaticSpritesProps } from "./allStaticSprites";
import { AnimationSprites, AnimationTypesProps, InitializedSprites, StaticSprites, StaticTypesProps, nonePlayerSprites } from "./typesForSprites";


export function initSprites(ctx: CanvasRenderingContext2D): InitializedSprites {

    const staticSprites: StaticSprites[] = createStaticSprites(ctx);

    const animationSprites: AnimationSprites[] = createAnimationSprites(ctx);

    const player: PlayerSprite = createPlayerSprite(ctx);

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
        let grounds = createStaticSpriteType(currentStaticProps.grounds)
        let walls = createStaticSpriteType(currentStaticProps.walls)
        levels.push({ grounds: grounds, walls: walls });
    }
    return levels;
}

function createAnimationSprites(ctx: CanvasRenderingContext2D): AnimationSprites[] {
    let levels: AnimationSprites[] = [];

    const allAnimationProps: AnimationTypesProps[] = allAnimationSpritesProps(ctx);
    for (let i = 0; i < allAnimationProps.length; ++i) {
        const currentAnimationProps: AnimationTypesProps = allAnimationProps[i];
        let lights = createAnimationSpriteType(currentAnimationProps.lights);
        let doors = createAnimationSpriteType(currentAnimationProps.doors);
        let items = createAnimationSpriteType(currentAnimationProps.items);
        let traps = createAnimationSpriteType(currentAnimationProps.traps);
        let treasures = createAnimationSpriteType(currentAnimationProps.treasures);
        levels.push({ lights: lights, doors: doors, items: items, traps: traps, treasures: treasures })
    }
    return levels;
}

function createAnimationSpriteType(properties: AnimationSpriteProps[]): AnimationSprite[] {
    let allObjects: AnimationSprite[] = [];
    properties.forEach((property: AnimationSpriteProps) => {
        allObjects.push(new AnimationSprite(property))
    });
    return allObjects;
}

function createStaticSpriteType(properties: StaticSpriteProps[]): StaticSprite[] {
    let allObjects: StaticSprite[] = [];
    properties.forEach((property: StaticSpriteProps) => {
        allObjects.push(new StaticSprite(property))
    });
    return allObjects;
}

function createPlayerSprite(ctx: CanvasRenderingContext2D): PlayerSprite {
    const player = new PlayerSprite({
        position: { x: 0, y: 0 },
        ctx: ctx,
        imageSrc: './SpriteSheets/SantaSprite.png',
        scale: 1.5
    });
    return player;
}