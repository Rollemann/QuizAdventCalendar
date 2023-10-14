import { Point, SpriteArea } from "./typesForSprites";
import { collisionCheck } from "../collisionCheck";

type PlayerSpriteProps = {
    position: Point | null,
    ctx: CanvasRenderingContext2D,
    imageSrc: string,
    scale: number
}

type Direction = 'left' | 'middle' | 'right';

type Animation = 'idle' | 'landing' | 'walking' | 'jumping' | 'enterDoor' | 'die' | 'openTreasure' | null;

const GRAVITY: number = 0.3;

export let inputsDisabled = false;
export let blackOutLevel: boolean = false;
export let currentLevel: number = 0;


export class PlayerSprite {
    position: Point;
    ctx: CanvasRenderingContext2D;
    velocity: Point = { x: 0, y: 0 };
    time: number = 0;
    image: HTMLImageElement = new Image();
    imgWidth: number;
    imgHeight: number;
    scale: number;
    walkVelocity: number = 3;
    jumpVelocity: number = -10;

    currentFrame: number = 0;
    maxFrames: number = 13;
    maxAnimations: number = 21;
    animationFrames: Point[] = [];
    frameRate: number = 20;
    repeatAnimation: boolean = true;
    actionAfter: boolean = false;
    actionFunctionAfter: () => void = () => { }
    hitBoxOffset: SpriteArea;
    hitBox: SpriteArea = { x: 0, y: 0, width: 0, height: 0 };
    nextLevel: number = 0;
    startPos: Point;
    animationBlocked: boolean = false;
    landingVelocity: number = 0;


    direction: Direction = 'middle';
    newDirection: Direction = "middle";
    currentAnimation: Animation = null;

    constructor(spriteProps: PlayerSpriteProps) {
        this.position = spriteProps.position || { x: 0, y: 0 };
        this.ctx = spriteProps.ctx;
        this.image.src = spriteProps.imageSrc;
        this.scale = spriteProps.scale;
        this.imgWidth = this.image.width / this.maxFrames;
        this.imgHeight = this.image.height / this.maxAnimations;
        this.setIdleAnim();

        this.hitBoxOffset = { x: (15 * this.scale), y: (7 * this.scale), width: -(30 * this.scale), height: - (9 * this.scale) };
        this.updateHitBox();
        this.startPos = { x: 0, y: this.ctx.canvas.height - (this.imgHeight * this.scale) };
    };

    draw() {
        this.ctx.drawImage(
            this.image,
            this.animationFrames[this.currentFrame].x * this.imgWidth,
            this.animationFrames[this.currentFrame].y * this.imgHeight,
            this.imgWidth,
            this.imgHeight,
            this.position.x,
            this.position.y,
            this.imgWidth * this.scale,
            this.imgHeight * this.scale
        )

        // TODO Hitboxen raus
        const hitBoxW = 10;
        this.ctx.strokeStyle = "red";
        this.ctx.strokeRect(this.hitBox.x, this.hitBox.y, this.hitBox.width, this.hitBox.height);
        /* this.ctx.strokeStyle = "blue";
        this.ctx.strokeRect(this.hitBox.x + this.hitBox.width - hitBoxW, this.hitBox.y, hitBoxW, this.hitBox.height + this.jumpVelocity);
        this.ctx.strokeRect(this.hitBox.x, this.hitBox.y, hitBoxW, this.hitBox.height + this.jumpVelocity);
        this.ctx.strokeStyle = "yellow";
        this.ctx.strokeRect(this.hitBox.x + hitBoxW, this.hitBox.y, this.hitBox.width - (2 * hitBoxW), hitBoxW);
        this.ctx.strokeRect(this.hitBox.x, this.hitBox.y + this.hitBox.height + this.jumpVelocity, this.hitBox.width, -this.jumpVelocity); */
    }

    update(solidObjectAreas: { groundAreas: SpriteArea[], wallAreas: SpriteArea[] }): SpriteArea {
        this.time += 1;
        this.velocity.y += GRAVITY;
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.landingVelocity = Math.abs(this.velocity.y);
        this.updateHitBox();

        this.adjustPositionOnCollision(solidObjectAreas)

        this.updateAnimation();

        // calculate currentFrame 
        if (this.time % this.frameRate == 0) {
            if (this.actionAfter && (this.currentFrame + 1) >= this.animationFrames.length) {
                this.actionFunctionAfter();
            }
            else if (this.repeatAnimation) {
                this.currentFrame = (this.currentFrame + 1) % this.animationFrames.length;
            }
            else {
                this.currentFrame = (this.currentFrame + 1) >= this.animationFrames.length ? this.currentFrame : this.currentFrame + 1;
            }
        }

        this.updateHitBox();
        return this.hitBox;
    }

    setIdleAnim() {
        if (this.currentAnimation != 'idle') {
            this.setupAnim(
                20,
                true,
                false,
                'middle',
                [
                    { x: 0, y: 2 },
                    { x: 1, y: 2 }
                ],
                'idle'
            );
        }
    }

    setJumpAnim() {
        if (this.currentAnimation != 'jumping') {
            let row: number;
            switch (this.direction) {
                case 'left':
                    row = 1;
                    break;
                case 'middle':
                    row = 2;
                    break;
                case 'right':
                    row = 3;
                    break;
                default:
                    throw new Error("Impossible direction to move!");
            }
            this.setupAnim(
                5,
                false,
                false,
                this.direction,
                [
                    { x: 0, y: row },
                    { x: 1, y: row },
                    { x: 2, y: row },
                    { x: 3, y: row },
                    { x: 4, y: row },
                    { x: 5, y: row }
                ],
                'jumping'
            );
        }
        else if (this.newDirection != this.direction) {
            this.direction = this.newDirection;
            let row: number;
            switch (this.direction) {
                case 'left':
                    row = 1;
                    break;
                case 'middle':
                    row = 2;
                    break;
                case 'right':
                    row = 3;
                    break;
                default:
                    throw new Error("Impossible direction to move!");
            }
            this.setupAnim(
                5,
                false,
                false,
                this.direction,
                [
                    { x: 5, y: row }
                ],
                'jumping'
            );
        }
    }

    setLandingAnim() {
        if (this.currentAnimation != 'landing') {
            this.setupAnim(
                10,
                false,
                true,
                'middle',
                [
                    { x: 4, y: 20 },
                    { x: 3, y: 20 },
                    { x: 2, y: 20 },
                    { x: 1, y: 20 }
                ],
                'landing'
            );
        }
    }

    setWalkAnim() {
        if (this.newDirection != this.direction || this.currentAnimation != "walking") {
            this.direction = this.newDirection;
            this.currentFrame = 0;
            let row: number;

            switch (this.direction) {
                case 'left':
                    row = 9;
                    break;
                case 'right':
                    row = 11;
                    break;
                default:
                    throw new Error("Impossible direction to move!");
            }
            this.setupAnim(
                5,
                true,
                false,
                this.direction,
                [
                    { x: 0, y: row },
                    { x: 1, y: row },
                    { x: 2, y: row },
                    { x: 3, y: row },
                    { x: 4, y: row },
                    { x: 5, y: row },
                    { x: 6, y: row },
                    { x: 7, y: row },
                    { x: 8, y: row },

                ],
                'walking'
            );
        }
    }

    setEnterDoorAnim() {
        this.setupAnim(
            10,
            false,
            true,
            "middle",
            [
                { x: 0, y: 12 },
                { x: 1, y: 12 },
                { x: 2, y: 12 },
                { x: 3, y: 12 },
                { x: 4, y: 12 },
                { x: 5, y: 12 },
                { x: 0, y: 8 },
                { x: 1, y: 8 },
                { x: 2, y: 8 },
                { x: 3, y: 8 },
                { x: 4, y: 8 },
                { x: 5, y: 8 },
                { x: 6, y: 8 },
                { x: 7, y: 8 },
                { x: 8, y: 8 },
                { x: 0, y: 8 },
                { x: 1, y: 8 },
                { x: 2, y: 8 },
                { x: 3, y: 8 },
                { x: 4, y: 8 },
            ],
            "enterDoor"
        )
    }

    setDieAnim() {
        this.setupAnim(
            3,
            false,
            true,
            "middle",
            [
                { x: 0, y: 20 },
                { x: 1, y: 20 },
                { x: 2, y: 20 },
                { x: 3, y: 20 },
                { x: 4, y: 20 },
                { x: 5, y: 20 },
                { x: 5, y: 20 },
                { x: 5, y: 20 },
                { x: 5, y: 20 },
                { x: 5, y: 20 },
                { x: 5, y: 20 },
                { x: 5, y: 20 },

            ],
            "die"
        )
    }

    setOpenTreasureAnim() {
        this.setupAnim(
            10,
            false,
            true,
            "middle",
            [
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 1, y: 0 },
                { x: 2, y: 0 },
                { x: 3, y: 0 },
                { x: 4, y: 0 },
                { x: 5, y: 0 },
                { x: 5, y: 1 },
                { x: 5, y: 2 },
                { x: 5, y: 3 },
                { x: 5, y: 0 },
                { x: 5, y: 1 },
                { x: 5, y: 2 },
            ],
            "openTreasure"
        )
    }

    setupAnim(
        frameRate: number,
        repeatAnimation: boolean,
        actionAfter: boolean,
        direction: Direction,
        animationFrames: Point[],
        currentAnimation: Animation
    ) {
        this.currentFrame = 0;
        this.frameRate = frameRate;
        this.repeatAnimation = repeatAnimation;
        this.actionAfter = actionAfter;
        this.direction = direction;
        this.animationFrames = animationFrames;
        this.currentAnimation = currentAnimation;
    }


    walkLeft() {
        this.velocity.x = -1 * this.walkVelocity;
        this.newDirection = "left";
    }

    walkRight() {
        this.velocity.x = this.walkVelocity;
        this.newDirection = "right";
    }

    jump() {
        if (this.velocity.y == 0) {
            this.velocity.y = this.jumpVelocity;
        }
    }

    stop() {
        this.velocity.x = 0;
        this.newDirection = 'middle';
    }

    enterDoor(doorNumber: number) {
        this.velocity.x = 0;
        this.velocity.y = 0;
        inputsDisabled = true;
        blackOutLevel = true;
        this.nextLevel = doorNumber;
        this.animationBlocked = true;

        this.actionFunctionAfter = () => {
            inputsDisabled = false;
            blackOutLevel = false;
            this.animationBlocked = false;
            currentLevel = this.nextLevel;
            this.position.x = this.startPos.x;
            this.position.y = this.startPos.y;
            this.setIdleAnim();
        };
        this.setEnterDoorAnim();
    }

    die() {
        if (this.currentAnimation != "die") {
            this.velocity.x = 0;
            inputsDisabled = true;
            this.animationBlocked = true;

            this.actionFunctionAfter = () => {
                inputsDisabled = false;
                this.position.x = this.startPos.x;
                this.position.y = this.startPos.y;
                this.animationBlocked = false;
                this.setIdleAnim();
            }
            this.setDieAnim();
        }
    }

    openTreasure() {
        this.velocity.x = 0;
        inputsDisabled = true;
        this.animationBlocked = true;

        this.actionFunctionAfter = () => {
            inputsDisabled = false;
            this.animationBlocked = false;
            this.setIdleAnim();
        }
        this.setOpenTreasureAnim();
    }

    adjustPositionOnCollision(solidAreas: { groundAreas: SpriteArea[], wallAreas: SpriteArea[] }) {
        // left and right canvas border
        if (this.hitBox.x < 0) {
            this.position.x = -this.hitBoxOffset.x;
            this.updateHitBox();
        }
        else if (this.hitBox.x + this.hitBox.width > this.ctx.canvas.width) {
            this.position.x = this.ctx.canvas.width - this.hitBox.width - this.hitBoxOffset.x;
            this.updateHitBox();
        }

        // top collision
        const hitBoxW: number = 10;
        const topHitBox: SpriteArea = { x: this.hitBox.x + hitBoxW, y: this.hitBox.y, width: this.hitBox.width - (2 * hitBoxW), height: hitBoxW };
        const topCollIndex = collisionCheck(topHitBox, solidAreas.wallAreas);
        if (topCollIndex >= 0) {
            this.position.y = solidAreas.wallAreas[topCollIndex].y + solidAreas.wallAreas[topCollIndex].height - this.hitBoxOffset.y;
            this.velocity.y = 0;
            this.updateHitBox();
        }

        // side collision
        const leftHitBox: SpriteArea = { x: this.hitBox.x, y: this.hitBox.y, width: hitBoxW, height: this.hitBox.height + this.jumpVelocity };
        const leftCollIndex = collisionCheck(leftHitBox, solidAreas.wallAreas);
        if (leftCollIndex >= 0) {
            const wall = solidAreas.wallAreas[leftCollIndex];
            this.position.x = wall.x + wall.width - this.hitBoxOffset.x;
            this.updateHitBox();
        }
        else {
            const rightHitBox: SpriteArea = { x: this.hitBox.x + this.hitBox.width - hitBoxW, y: this.hitBox.y, width: hitBoxW, height: this.hitBox.height + this.jumpVelocity };
            const rightCollIndex = collisionCheck(rightHitBox, solidAreas.wallAreas);
            if (rightCollIndex >= 0) {
                const wall = solidAreas.wallAreas[rightCollIndex];
                this.position.x = wall.x - this.hitBox.width - this.hitBoxOffset.x;
                this.updateHitBox();
            }
        }


        // bottom collision
        const bottomHitBox: SpriteArea = { x: this.hitBox.x, y: this.hitBox.y + this.hitBox.height + this.jumpVelocity, width: this.hitBox.width, height: -this.jumpVelocity };
        const bottomCollIndexGround = collisionCheck(bottomHitBox, solidAreas.groundAreas);
        if (bottomCollIndexGround >= 0 && this.velocity.y > 0) {
            this.position.y = solidAreas.groundAreas[bottomCollIndexGround].y - this.hitBox.height - this.hitBoxOffset.y;
            this.velocity.y = 0;
            this.updateHitBox();
        }
        else {
            const bottomCollIndexWall = collisionCheck(bottomHitBox, solidAreas.wallAreas);
            if (bottomCollIndexWall >= 0 && this.velocity.y > 0) {
                this.position.y = solidAreas.wallAreas[bottomCollIndexWall].y - this.hitBox.height - this.hitBoxOffset.y;
                this.velocity.y = 0;
                this.updateHitBox();
            }
        }
    }

    updateHitBox() {
        this.hitBox = { x: this.position.x + this.hitBoxOffset.x, y: this.position.y + this.hitBoxOffset.y, width: this.imgWidth * this.scale + this.hitBoxOffset.width, height: this.imgHeight * this.scale + this.hitBoxOffset.height };
    }

    updateAnimation() {
        if (!this.animationBlocked) {
            if (this.velocity.y == 0 && this.currentAnimation == 'jumping' && this.velocity.x == 0 && this.landingVelocity > 2) {
                this.setLandingAnim();
                this.actionFunctionAfter = () => { this.setIdleAnim(); };
            }
            else if (this.velocity.y != 0 && this.landingVelocity >= 2) {
                this.setJumpAnim();
            }
            else if (this.velocity.x != 0 && this.velocity.y == 0) {
                this.setWalkAnim();
            }
            else if (this.velocity.x == 0 && this.velocity.y == 0 && this.currentAnimation == 'walking') {
                this.setIdleAnim();
            }
        }
    }
}