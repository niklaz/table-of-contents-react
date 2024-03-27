import React from "react";
import { Chapter } from "../models/Chapter";
import {useActiveChapter} from "../providers/ChapterProvider";
import useOpenChapter from "../hooks/useOpenChapter";

/*
* interface for ChapterListItemProps that takes item of type Chapter
*
* @param item - Chapter
* */
interface ChapterListItemProps {
    item: Chapter;
}

/*
*
*  ChapterListItem component that displays the list of chapters and their children
*
* @param item - Chapter
*
* */
export default function ChapterListItem({ item }: ChapterListItemProps) {
    const { activeChapter, activeSubChapter } = useActiveChapter();
    const openChapter = useOpenChapter(); // Use the custom Hook

    //check if current item is parent of active chapter
    const isParentOfActiveChapter = activeChapter?.parent_id === item.id;

    //if current item is active chapter, then add active class,
    // but if there is activeSubChapter, and current item is parent of activeSubChapter, then add active class also set active if current item is activeSubChapter
    const activeClass = ((activeChapter === item && activeSubChapter?.parent_id !== activeChapter.id) || activeSubChapter === item) ? "active" : "";

    return (
        <li className={`list-item level-${item.level} ${activeClass}`}>
            <button onClick={() => openChapter(item)}>{item.name}</button>
            {(item.children && (activeChapter === item || isParentOfActiveChapter)) && (
                <ul>
                    {item.children.map((child, index) => (
                        <ChapterListItem item={child} key={index} />
                    ))}
                </ul>
            )}
        </li>
    );
}