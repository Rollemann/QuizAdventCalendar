import { shapeDrawer } from "@/app/components/svgDrawer";
import { Position } from "@/app/components/svgDrawer";
import { useAuthContext } from "@/app/contexts/AuthContext";
import { useContentContext } from "@/app/contexts/ContentContext";

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
    const { content, setContent } = useContentContext();
    const { user, logOut } = useAuthContext();

    const handleSignIn = async () => {
        content == 'login' ? setContent(null) : setContent('login'); // TODO: testen
    }

    const handleLogOut = async () => {
        try {
            await logOut();
            console.log(user);
        } catch (error) {
            console.log(error); // TODO: das noch ordentlich darstellen
        }
    }

    return (
        <>
            {!user ? <svg viewBox={`0 0 ${width + 30} ${height + 15}`} onClick={handleSignIn} className="cursor-pointer">
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
            </svg> :
                <svg viewBox={`0 0 ${width + 30} ${height + 15}`} onClick={handleLogOut} className="cursor-pointer">
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
                        transform={`translate(108,159) rotate(180)`}
                        opacity={0.5}
                        stroke='black'
                        strokeWidth={2}
                        fill='black'
                        d={arrow}
                    />
                    <path
                        transform={`translate(95,151) rotate(180)`}
                        stroke='black'
                        strokeWidth={5}
                        fill='black'
                        d={arrow}
                    />
                </svg>}
        </>
    )
}

export default Login