import { shapeDrawer } from "@/app/utilities/svgUtilities";
import { Position } from "@/app/utilities/svgUtilities";

const pixelSize: number = 10;
const startX: number = 40;
const width: number = 120;
const height: number = 150;

const borderStart: Position = { x: startX, y: 0 };
const borderShape: number[] = [8, 15, -8, -3, 1, 2, 6, -13, -6, 2, -1, -3];
const border: string = shapeDrawer(borderStart, borderShape, pixelSize);

const arrowStart: Position = { x: 0, y: 70 };
const arrowShape: number[] = [7, -1, -1, -1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 1, -1, 1, -1, 1, -1, -1, 1, -1, 1, -1, -7, -1];
const arrow: string = shapeDrawer(arrowStart, arrowShape, pixelSize);

const Login = () => {
    return (
        <svg viewBox={`0 0 ${width + 30} ${height + 15}`} className="cursor-pointer">
            <path
                transform={`translate(8,8)`}
                opacity={0.5}
                fill='black'
                d={border}
            />
            <path
                transform={`translate(-5,0)`}
                stroke='black'
                strokeWidth={5}
                fill='black'
                d={border}
            />
            <path
                transform={`translate(8,8)`}
                opacity={0.5}
                stroke='black'
                strokeWidth={2}
                fill='black'
                d={arrow}
            />
            <path
                transform={`translate(-5,0)`}
                stroke='black'
                strokeWidth={5}
                fill='black'
                d={arrow}
            />
        </svg>
    )
}

export default Login