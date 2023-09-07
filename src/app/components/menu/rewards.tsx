import { useSpeachBubbleContext } from "@/app/contexts/speachBubbleContext";
import { shapeDrawer } from "@/app/utilities/svgUtilities";
import { Position } from "@/app/utilities/svgUtilities";

const pixelSize: number = 10;
const startX: number = 100;
const width: number = 250;
const height: number = 250;

const circleStart: Position = { x: startX, y: 0 };
const circleShape: number[] = [7, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 7, -1, 2, -1, 2, -1, 1, -1, 1, -1, 1, -2, 1, -2, 1, -7, -1, -2, -1, -2, -1, -1, -1, -1, -1, -1, -2, -1, -2, -1, -7, 1, -2, 1, -2, 1, -1, 1, -1, 1, -1, 2, -1, 2, -1];
const circle: string = shapeDrawer(circleStart, circleShape, pixelSize);

const number1Start: Position = { x: startX, y: 170 };
const number1Shape: number[] = [7, -2, -2, -8, -3, 1, -2, 2, 2, 5, -2, 2];
const number1: string = shapeDrawer(number1Start, number1Shape, pixelSize);

const Rewards = () => {
    const { speachBubble, setSpeachBubble } = useSpeachBubbleContext();
    return (
        <svg viewBox={`0 0 ${width + 30} ${height + 15}`} onClick={() => setSpeachBubble('rewards')}>
            <defs>
                <linearGradient id="Gradient2">
                    <stop offset="0%" stop-color="yellow" />
                    <stop offset="50%" stop-color="lightyellow"/>
                    <stop offset="100%" stop-color="yellow" />
                </linearGradient>
            </defs>
            <path
                transform={`translate(10,10)`}
                opacity={0.5}
                fill='black'
                d={circle}
            />
            <path
                transform={`translate(-5,0)`}
                stroke='black'
                strokeWidth={5}
                fill='url(#Gradient2)'
                d={circle}
            />
            <path
                stroke='black'
                strokeWidth={5}
                fill='black'
                d={number1}
            />
        </svg>
    )
}

export default Rewards