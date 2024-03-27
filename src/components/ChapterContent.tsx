import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";
import ChapterContentItem from "./ChapterContentItem";

/*
*  ChapterContent component that displays the content of the selected chapter and its children
*
* @returns - JSX.Element
* */
export default function ChapterContent() {
    const { tocData, activeChapter } = useActiveChapter();

    return (

    <>  { tocData && tocData.length > 0 ?  (
        <div>
            {activeChapter ? (
                <ChapterContentItem item={activeChapter} includeChildren={true} />
            ) : (
                <p>Please select a chapter</p>
            )}
        </div>
    ) : <p>No data found, please check your connection or check if the API is running and try again.
    </p> }
    </>
    );
}