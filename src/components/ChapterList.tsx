import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";
import ChapterListItem from "./ChapterListItem";


/*
* Displays the Table of Contents tree structure
*
*  @returns - JSX.Element
* */
export default function ChapterList() {
    const { tocData } = useActiveChapter();

    return (
        <>  { tocData && tocData.length > 0 ?  (
            <ul className="toc-tree">
                {tocData.map((item: any, index: any) => (
                    <ChapterListItem item={item} key={index} />
                ))}
            </ul>
        ) : <p> </p> }
        </>
    );
}