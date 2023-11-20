'use client'
import React, { createContext, useContext, useState } from 'react'

type ContentContextProviderProps = { children: React.ReactNode };

type Content = 'chat' | 'ranking' | 'rewards' | 'rules' | null;

type ContentContext = {
    content: Content,
    setContent: React.Dispatch<React.SetStateAction<Content>>,
    contentValue: React.JSX.Element,
    setContentValue: React.Dispatch<React.SetStateAction<React.JSX.Element>>
}

const ContentContext = createContext<ContentContext | null>(null);


export const ContentContextProvider = ({ children }: ContentContextProviderProps) => {
    const [content, setContent] = useState<Content>(null);
    const [contentValue, setContentValue] = useState(<></>);

    return (
        <ContentContext.Provider value={{ content, setContent, contentValue, setContentValue }}>
            {children}
        </ContentContext.Provider>
    )
}

export const useContentContext = () => {
    const context = useContext(ContentContext);
    if (!context) {
        throw new Error("useContentContext must be used within a ContentContextProvider");
    }
    return context
}