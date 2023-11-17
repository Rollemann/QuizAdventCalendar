'use client'
import React, { createContext, useContext, useState } from 'react'

type SpeechBubbleContextProviderProps = { children: React.ReactNode };

type SpeechBubble = 'chat' | 'ranking' | 'rewards' | 'rules' | null;

type SpeechBubbleContext = {
    speechBubble: SpeechBubble,
    setSpeechBubble: React.Dispatch<React.SetStateAction<SpeechBubble>>,
    speechBubbleContent: React.JSX.Element,
    setSpeechBubbleContent: React.Dispatch<React.SetStateAction<React.JSX.Element>>
}

const SpeechBubbleContext = createContext<SpeechBubbleContext | null>(null);


export const SpeechBubbleContextProvider = ({ children }: SpeechBubbleContextProviderProps) => {
    const [speechBubble, setSpeechBubble] = useState<SpeechBubble>(null);
    const [speechBubbleContent, setSpeechBubbleContent] = useState(<></>); // TODO: Das hier könnte auch ein SVG Element sein (path, text). Mal schauen ob man hier auch scrollen kann oder wie oder wat

    return (
        <SpeechBubbleContext.Provider value={{ speechBubble, setSpeechBubble, speechBubbleContent, setSpeechBubbleContent }}>
            {children}
        </SpeechBubbleContext.Provider>
    )
}

export const useSpeechBubbleContext = () => {
    const context = useContext(SpeechBubbleContext);
    if (!context) {
        throw new Error("useSpeechBubbleContext must be used within a SpeechBubbleContextProvider");
    }
    return context
}