import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";
import ChapterContentItem from "./ChapterContentItem";

/*
*  ChapterContent component that displays the content of the selected chapter and its children
*
* @returns - JSX.Element
* */
export default function ChapterContent() {
    const { activeChapter } = useActiveChapter();

    return (
        <>
            {activeChapter ? (
                <ChapterContentItem item={activeChapter} includeChildren={true} />
            ) : (
                <p>Please select a chapter</p>
            )}
        </>
    );
}