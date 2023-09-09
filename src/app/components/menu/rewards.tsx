import { useSpeachBubbleContext } from "@/app/contexts/speachBubbleContext";
import { shapeDrawer } from "@/app/utilities/svgUtilities";
import { Position } from "@/app/utilities/svgUtilities";

const pixelSize: number = 10;
const width: number = 330;
const height: number = 350;

const bowlStart: Position = { x: 50, y: 55 };
const bowlShape: number[] = [25, 14, -1, 2, -1, 2, -1, 1, -1, 1, -1, 1, -2, 1, -2, 1, -7, -1, -2, -1, -2, -1, -1, -1, -1, -1, -1, -2, -1, -2, -1, -14];
const bowl: string = shapeDrawer(bowlStart, bowlShape, pixelSize);

const feedStart: Position = { x: 50, y: 305 };
const feedShape: number[] = [25, 5, -25, -5];
const feed: string = shapeDrawer(feedStart, feedShape, pixelSize);

const connectorStart: Position = { x: 160, y: 285 };
const connectorShape: number[] = [3, 2, -3, -2];
const connector: string = shapeDrawer(connectorStart, connectorShape, pixelSize);

const holeStart: Position = { x: 120, y: 5 };
const holeShape: number[] = [11, 1, 4, 1, 1, 1, 1, 1, 1, 2, -1, 1, -1, 1, -1, 1, -4, 1, -11, -1, -4, -1, -1, -1, -1, -1, -1, -2, 1, -1, 1, -1, 1, -1, 4, -1];
const hole: string = shapeDrawer(holeStart, holeShape, pixelSize);

const leftHandleStart: Position = { x: 80, y: 125 };
const leftHandleShape: number[] = [-6, -1, -1, -2, 1, -1, 3];
const leftHandle: string = shapeDrawer(leftHandleStart, leftHandleShape, pixelSize);

const rightHandleStart: Position = { x: 270, y: 125 };
const rightHandleShape: number[] = [6, -1, 1, -2, -1, -1, -3];
const rightHandle: string = shapeDrawer(rightHandleStart, rightHandleShape, pixelSize);

const Rewards = () => {
    const { speachBubble, setSpeachBubble } = useSpeachBubbleContext();
    return (
        <svg viewBox={`0 0 ${width + 30} ${height + 20}`} onClick={() => setSpeachBubble('rewards')} className="cursor-pointer">
            <defs>
                <linearGradient id="bowlGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="yellow" />
                    <stop offset="100%" stopColor="#CDAD00" />
                </linearGradient>
            </defs>
            <path // connector shadow
                transform={`translate(15,15)`}
                opacity={0.5}
                fill='black'
                d={connector}
            />
            <path // feed shadow
                transform={`translate(15,15)`}
                opacity={0.5}
                fill='black'
                d={feed}
            />
            <path // connector
                stroke='black'
                strokeWidth={6}
                fill='gold'
                d={connector}
            />
            <path // feed
                stroke='black'
                strokeWidth={6}
                fill='grey'
                d={feed}
            />
            <path // bowl shadow
                transform={`translate(15,15)`}
                opacity={0.5}
                fill='black'
                d={bowl}
            />
            <path // bowl
                stroke='black'
                strokeWidth={6}
                fill='url(#bowlGradient)'
                d={bowl}
            />
            <path // hole
                stroke='black'
                strokeWidth={6}
                fill='url(#bowlGradient)'
                d={hole}
            />
            <path // writing
                stroke='black'
                strokeWidth={10}
                d="M 140,330 L 210,330"
            />
            <path // handle left
                stroke='black'
                strokeWidth={10}
                fillOpacity={0}
                d={leftHandle}
            />
            <path // handle right
                stroke='black'
                strokeWidth={10}
                fillOpacity={0}
                d={rightHandle}
            />
        </svg>
    )
}

export default Rewards