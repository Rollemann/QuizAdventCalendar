import { useSpeachBubbleContext } from "@/app/contexts/speachBubbleContext";
import { shapeDrawer } from "@/app/utilities/svgDrawer";
import { Position } from "@/app/utilities/svgDrawer";

const pixelSize: number = 10;
const startX: number = 100;
const width: number = 250;
const height: number = 250;

const circleStart: Position = { x: startX, y: 5 };
const circleShape: number[] = [7, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 7, -1, 2, -1, 2, -1, 1, -1, 1, -1, 1, -2, 1, -2, 1, -7, -1, -2, -1, -2, -1, -1, -1, -1, -1, -1, -2, -1, -2, -1, -7, 1, -2, 1, -2, 1, -1, 1, -1, 1, -1, 2, -1, 2, -1];
const circle: string = shapeDrawer(circleStart, circleShape, pixelSize);

const number1Start: Position = { x: startX, y: 175 };
const number1Shape: number[] = [7, -2, -2, -8, -3, 1, -2, 2, 2, 5, -2, 2];
const number1: string = shapeDrawer(number1Start, number1Shape, pixelSize);

const Ranking = () => {
    const {speachBubble, setSpeachBubble} = useSpeachBubbleContext();
    return (
        <svg viewBox={`0 0 ${width + 30} ${height + 15}`} onClick={() => setSpeachBubble('ranking')} className="cursor-pointer">
            <defs>
                <linearGradient id="GradientRanking">
                    <stop offset="0%" stopColor="#EEC900" />
                    <stop offset="50%" stopColor="yellow"/>
                    <stop offset="100%" stopColor="#EEC900" />
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
                fill='url(#GradientRanking)'
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

export default Ranking