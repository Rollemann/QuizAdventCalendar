import { useSpeachBubbleContext } from '@/app/contexts/speachBubbleContext'

const pixelSize: number = 10;
const qube: string = `l ${pixelSize},0 l 0,${pixelSize}`;
const startX: number = 75;
const width: number = 300;
const height: number = 180;
const diagLength: number = 4;

let diagLine: string = "";
for (let i: number = 0; i < diagLength; ++i) {
    const offset: number = i * pixelSize;
    diagLine += `M ${startX + offset},${offset} ${qube}`;
}

const Chat = () => {
    const { speachBubble, setSpeachBubble } = useSpeachBubbleContext();
    return (
        <svg viewBox={`0 0 ${width+10} ${height+10}`} onClick={() => setSpeachBubble('chat')} className='h-20'>
            <path
                transform={`rotate(180) translate(-${width + 10},-${height + 10})`}
                opacity={0.5}
                fill='black' // TODO: Farbe anpassen zum Fragezeichen
                d={`${diagLine} M ${startX + diagLength * pixelSize},${diagLength * pixelSize} L ${width - 10},${diagLength * pixelSize} L ${width - 10},${height} L 10,${height} L 10,${diagLength * pixelSize} L ${startX},${diagLength * pixelSize} L ${startX},0`}
            />
            <path
                transform={`rotate(180) translate(-${width},-${height})`}
                stroke='black'
                strokeWidth={5}
                fill='#909090'
                d={`${diagLine} M ${startX + diagLength * pixelSize},${diagLength * pixelSize} L ${width - 10},${diagLength * pixelSize} L ${width - 10},${height} L 10,${height} L 10,${diagLength * pixelSize} L ${startX},${diagLength * pixelSize} L ${startX},0`}
            />
            <text x={110} y={height / 2} fontSize={100}>
                ...
            </text>
        </svg>
    )
}

export default Chat