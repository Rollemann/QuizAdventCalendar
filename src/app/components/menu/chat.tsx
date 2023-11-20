import { useSpeechBubbleContext } from '@/app/contexts/speechBubbleContext'
import { shapeDrawer } from "@/app/components/svgDrawer";
import { Position } from "@/app/components/svgDrawer";
import { useAuthContext } from '@/app/contexts/AuthContext';

const pixelSize: number = 10;
const qube: string = `l ${pixelSize},0 l 0,${pixelSize} l -${pixelSize},0 Z`;
const startX: number = 225;
const width: number = 300;
const height: number = 180;

const speechBubbleIconStart: Position = { x: startX, y: height };
const speechBubbleIconShape: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -18.5, -14, 30, 14, -7.5, 4.25];
const speechBubbleIcon: string = shapeDrawer(speechBubbleIconStart, speechBubbleIconShape, pixelSize);

const Chat = () => {
    const { speechBubble, setSpeechBubble } = useSpeechBubbleContext();
    const { user } = useAuthContext();

    function toggleSpeechBubble() {
        speechBubble == 'chat' ? setSpeechBubble(null) : setSpeechBubble('chat');
    }

    return (
        <>
            {user ?
                (
                    <svg viewBox={`0 0 ${width + 15} ${height + 15}`} onClick={toggleSpeechBubble} className="cursor-pointer">
                        <path // shadow
                            transform={`translate(15,15)`}
                            opacity={0.5}
                            fill='black'
                            d={speechBubbleIcon}
                        />
                        <path // icon
                            transform='translate(5,5)'
                            stroke='black'
                            strokeWidth={5}
                            fill='#909090'
                            d={speechBubbleIcon}
                        />
                        <path // 3 dots
                            stroke='black'
                            strokeWidth={1}
                            fill='black'
                            d={`M 120,80 ${qube} M 150,80 ${qube} M 180,80 ${qube}`}
                        />
                    </svg>
                ) :
                (
                    <div className='w-24'></div>
                )
            }
        </>
    )
}

export default Chat