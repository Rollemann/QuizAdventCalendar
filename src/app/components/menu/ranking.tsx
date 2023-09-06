import { useSpeachBubbleContext } from "@/app/contexts/speachBubbleContext";

const Ranking = () => {
    const {speachBubble, setSpeachBubble} = useSpeachBubbleContext();
    return (
        <button onClick={() => setSpeachBubble('ranking')}>Ranking</button>
    )
}

export default Ranking