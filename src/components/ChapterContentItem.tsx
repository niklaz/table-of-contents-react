import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";
import {Chapter} from "../models/Chapter";
import useOpenChapter from "../hooks/useOpenChapter";


interface ChapterContentItemProps {
    item: Chapter;
    includeChildren?: boolean;
}

export default function ChapterContentItem({item , includeChildren = false} : ChapterContentItemProps) {

    const { activeChapter, activeSubChapter } = useActiveChapter();

    const openChapter = useOpenChapter(); // Use the custom Hook
    const activeClass = ((activeChapter === item && activeSubChapter?.parent_id !== activeChapter.id) || activeSubChapter === item) ? "active" : "";

    return (
        <div className={`chapter level-${item.level} ${activeClass}`} id={`chapter-${item.id}`}>
            <h3 className="heading"><button onClick={() => openChapter(item)}>{item.name}</button></h3>
            <div className="chapter-content">{item.content}</div>
            {includeChildren && item.children && item.children.length > 0 && (
                <div className="chapter-children">
                    {item.children.map((child, index) => (
                        <ChapterContentItem key={index} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

