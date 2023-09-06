import { useSpeachBubbleContext } from "@/app/contexts/speachBubbleContext";

const Rewards = () => {
    const {speachBubble, setSpeachBubble} = useSpeachBubbleContext();
    return (
        <button onClick={() => setSpeachBubble('rewards')}>Preise</button>
    )
}

export default Rewards