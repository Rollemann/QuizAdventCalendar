import { useSpeachBubbleContext } from '@/app/contexts/speachBubbleContext'
import { shapeDrawer } from "@/app/utilities/svgUtilities";
import { Position } from "@/app/utilities/svgUtilities";

const pixelSize: number = 10;
const qube: string = `l ${pixelSize},0 l 0,${pixelSize} l -${pixelSize},0 Z`;
const startX: number = 225;
const width: number = 300;
const height: number = 180;

const speachBubbleIconStart: Position = { x: startX, y: height };
const speachBubbleIconShape: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -18.5, -14, 30, 14, -7.5, 4.25];
const speachBubbleIcon: string = shapeDrawer(speachBubbleIconStart, speachBubbleIconShape, pixelSize);

const Chat = () => {
    const { speachBubble, setSpeachBubble } = useSpeachBubbleContext();
    return (
        <svg viewBox={`0 0 ${width + 15} ${height + 15}`} onClick={() => setSpeachBubble('chat')} className="cursor-pointer">
            <path // shadow
                transform={`translate(15,15)`}
                opacity={0.5}
                fill='black'
                d={speachBubbleIcon}
            />
            <path // icon
                transform='translate(5,5)'
                stroke='black'
                strokeWidth={5}
                fill='#909090'
                d={speachBubbleIcon}
            />
            <path // 3 dots
                stroke='black'
                strokeWidth={1}
                fill='black'
                d={`M 120,80 ${qube} M 150,80 ${qube} M 180,80 ${qube}`}
            />
        </svg>
    )
}

export default Chat