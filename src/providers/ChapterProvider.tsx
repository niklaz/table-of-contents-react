import React, { createContext, useContext, useState } from 'react';
import { Chapter } from "../models/Chapter";


/*
*  ChapterContextType is an interface that defines the shape of the context object that will be provided by the ChapterProvider component.
*
* */
interface ChapterContextType {
    activeChapter: Chapter | null;
    setActiveChapter: React.Dispatch<React.SetStateAction<Chapter | null>>;
    activeSubChapter: Chapter | null;
    setActiveSubChapter: React.Dispatch<React.SetStateAction<Chapter | null>>;
    tocData: Chapter[] | null;
    setTocData: React.Dispatch<React.SetStateAction<Chapter[] | null>>;
}

/*
*  ChapterContext is a context object that will be provided by the ChapterProvider component.
* It is used to manage the active chapter and subchapter in the application.
*
* @type {React.Context<ChapterContextType | undefined>}
* @default undefined
* */
const ChapterContext = createContext<ChapterContextType | undefined>(undefined);


/*
*   useActiveChapter is a custom hook that provides access to the active chapter and subchapter in the application.
* */
export const useActiveChapter = () => {
    const context = useContext(ChapterContext);
    if (!context) {
        throw new Error('useActiveChapter must be used within an ChapterProvider');
    }
    return context;
}

/*
*  ChapterProvider is a component that provides the ChapterContext to its children.
*
* */
export const ChapterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
    const [activeSubChapter, setActiveSubChapter] = useState<Chapter | null>(null);
    const [tocData, setTocData] = useState<Chapter[] | null>(null);

    return (
        <ChapterContext.Provider value={{ activeChapter, setActiveChapter, activeSubChapter, setActiveSubChapter, tocData, setTocData }}>
            {children}
        </ChapterContext.Provider>
    );
};
