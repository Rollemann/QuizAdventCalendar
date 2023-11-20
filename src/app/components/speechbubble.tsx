import { useContentContext } from '../contexts/speechBubbleContext';

type Position = 'self-end' | '';

const pixelSize: number = 3;
const qube: string = `l ${pixelSize},0 l 0,${pixelSize}`;
const startX: number = 75;
const width: number = 300;
const height: number = 180;
const diagLength: number = 7;

let diagLine: string = "";
for (let i: number = 0; i < diagLength; ++i) {
    const offset: number = i * pixelSize;
    diagLine += `M ${startX + offset},${offset} ${qube}`;
}

const Speechbubble = () => {
    const { content, setContent, contentValue, setContentValue } = useContentContext();

    let mirror: boolean = false;
    let position: Position = '';

    switch (content) {
        case 'chat':
            mirror = false;
            position = "self-end";
            break;

        case 'ranking':
            mirror = true;
            position = '';
            break;

        case 'rewards':
            mirror = false;
            position = '';
            break;

        case 'rules':
            mirror = true;
            position = 'self-end';
            break;

        default:
            break;
    }

    return (
        <>
            {content && <svg viewBox={`0 0 ${width} ${height}`} onClick={() => setContent(null)} className={`${position} w-1/4`}>
                <path
                    transform={mirror ? 'scale(-1,1) translate(-300,0)' : ""}
                    stroke='black'
                    strokeWidth={1}
                    fill='orange'
                    d={`${diagLine} M ${startX + diagLength * pixelSize},${diagLength * pixelSize} L ${width - 10},${diagLength * pixelSize} L ${width - 10},${height} L 10,${height} L 10,${diagLength * pixelSize} L ${startX},${diagLength * pixelSize} L ${startX},0`}
                />
                <text x={15} y={37}>
                    Placholder Text for later on.
                </text>
            </svg>}
        </>
    )
}

export default Speechbubble