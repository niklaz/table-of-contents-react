import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";
import {Chapter} from "../models/Chapter";
import ChapterListItem from "./ChapterListItem";


/*
* Displays the Table of Contents tree structure
* */
export default function ToCTree() {
    const { activeChapter, activeSubChapter, setActiveChapter, setActiveSubChapter, tocData, setTocData } = useActiveChapter();

    const openChapter = (item: Chapter) => {
        //check if item level is 1 or 2 and set active chapter accordingly
        if(item.level && item.level !== 3){
            setActiveChapter(item);
            setActiveSubChapter(null);
        } else {
                setActiveSubChapter(item);
        }
    }

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