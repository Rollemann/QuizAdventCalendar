import { useSpeachBubbleContext } from "@/app/contexts/speachBubbleContext";
import { shapeDrawer } from "@/app/utilities/svgUtilities";
import { Position } from "@/app/utilities/svgUtilities";

const pixelSize: number = 10;
const width: number = 200;
const height: number = 280;

const questionMarkStart: Position = { x: 55, y: 5 };
const questionMarkShape: number[] = [10, 1, 2, 1, 1, 1, 1, 2, 1,8,-1,2,-1,1,-1,1,-2,1,-2,3,-1,1,-5,-1,-1,-6,1,-1,1,-1,2,-1,3,-5,-6,4,-1,1,-5,-1,-1,-6,1,-2,1,-1,1,-1,2,-1.25];
const questionMark: string = shapeDrawer(questionMarkStart, questionMarkShape, pixelSize);

const dotStart: Position = { x: 75, y: 235 };
const dotShape: number[] = [5,1,1,3,-1,1,-5,-1,-1,-3,1,-1];
const dot: string = shapeDrawer(dotStart, dotShape, pixelSize);

const Rules = () => {
    const { speachBubble, setSpeachBubble } = useSpeachBubbleContext();
    return (
        <svg viewBox={`0 0 ${width + 30} ${height + 20}`} onClick={() => setSpeachBubble('rules')} className="cursor-pointer">
            <path // questionMark shadow
                transform={`translate(15,15)`}
                opacity={0.5}
                fill='black'
                d={questionMark}
            />
            <path // questionMark
                stroke='black'
                strokeWidth={6}
                fill='grey'
                d={questionMark}
            />
            <path // dot shadow
                transform={`translate(15,15)`}
                opacity={0.5}
                fill='black'
                d={dot}
            />
            <path // dot
                stroke='black'
                strokeWidth={6}
                fill='grey'
                d={dot}
            />
        </svg>
    )
}

export default Rules