import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";
import {Chapter} from "../models/Chapter";
import ChapterListItem from "./ChapterListItem";


/*
* Displays the Table of Contents tree structure
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
        ) : <p>No data found</p> }
        </>
    );
}