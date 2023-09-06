import { useSpeachBubbleContext } from "@/app/contexts/speachBubbleContext";

const Rules = () => {
    const {speachBubble, setSpeachBubble} = useSpeachBubbleContext();
    return (
        <img src="./Questionmark.png" alt="?" width={"80px"} className='relative' onClick={() => setSpeachBubble('rules')}/>
    )
}

export default Rules