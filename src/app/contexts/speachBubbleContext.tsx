'use client'
import { createContext, useContext, useState } from 'react'

type SpeachBubbleContextProviderProps = { children: React.ReactNode };

type SpeachBubble = 'chat' | 'ranking' | 'rewards' | 'rules' | null;

type SpeachBubbleContext = {
    speachBubble: SpeachBubble
    setSpeachBubble: React.Dispatch<React.SetStateAction<SpeachBubble>>;
}

const SpeachBubbleContext = createContext<SpeachBubbleContext | null>(null);


const SpeachBubbleContextProvider = ({ children }: SpeachBubbleContextProviderProps) => {
    const [speachBubble, setSpeachBubble] = useState<SpeachBubble>(null);

    return (
        <SpeachBubbleContext.Provider value={{ speachBubble, setSpeachBubble }}>
            {children}
        </SpeachBubbleContext.Provider>
    )
}

export const useSpeachBubbleContext = () => {
    const context = useContext(SpeachBubbleContext);
    if (!context) {
        throw new Error("useSpeachBubbleContext must be used within a SpeachBubbleContextProvider");
    }
    return context
}

export default SpeachBubbleContextProvider