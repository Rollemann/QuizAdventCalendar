import { useContentContext } from "@/app/contexts/ContentContext";
import { shapeDrawer } from "@/app/components/svgDrawer";
import { Position } from "@/app/components/svgDrawer";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { Tooltip } from "react-tooltip";

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
    const { content, setContent } = useContentContext();
    const { user } = useAuthContext();

    function toggleContent() {
        content == 'ranking' ? setContent(null) : setContent('ranking');
    }

    return (
        <>
            {user &&
                <>
                    <svg viewBox={`0 0 ${width + 30} ${height + 15}`} onClick={toggleContent} className="cursor-pointer" data-tooltip-id="ranking" data-tooltip-content="Ranking">
                        <defs>
                            <linearGradient id="GradientRanking">
                                <stop offset="0%" stopColor="#EEC900" />
                                <stop offset="50%" stopColor="yellow" />
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
                    <Tooltip id="ranking" />
                </>
            }
        </>
    )
}

export default Ranking