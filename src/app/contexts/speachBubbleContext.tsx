'use client'
import React, { createContext, useContext, useState } from 'react'

type SpeachBubbleContextProviderProps = { children: React.ReactNode };

type SpeachBubble = 'chat' | 'ranking' | 'rewards' | 'rules' | null;

type SpeachBubbleContext = {
    speachBubble: SpeachBubble,
    setSpeachBubble: React.Dispatch<React.SetStateAction<SpeachBubble>>,
    speachBubbleContent: React.JSX.Element,
    setSpeachBubbleContent: React.Dispatch<React.SetStateAction<React.JSX.Element>>
}

const SpeachBubbleContext = createContext<SpeachBubbleContext | null>(null);


const SpeachBubbleContextProvider = ({ children }: SpeachBubbleContextProviderProps) => {
    const [speachBubble, setSpeachBubble] = useState<SpeachBubble>(null);
    const [speachBubbleContent, setSpeachBubbleContent] = useState(<></>); // TODO: Das hier könnte auch ein SVG Element sein (path, text). Mal schauen ob man hier auch scrollen kann oder wie oder wat

    return (
        <SpeachBubbleContext.Provider value={{ speachBubble, setSpeachBubble, speachBubbleContent, setSpeachBubbleContent }}>
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