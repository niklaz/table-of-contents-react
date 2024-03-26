import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";
import {Chapter} from "../models/Chapter";

export default function ToCTree() {
    const { activeChapter, activeSubChapter, setActiveChapter, setActiveSubChapter, tocData, setTocData } = useActiveChapter();

    const openChapter = (item: Chapter) => {
        //check if item level is 1 or 2 and set active chapter accordingly
        if(item.level && item.level === 1){
            setActiveChapter(item);
            setActiveSubChapter(null);
        } else {
          //  if(item.level && item.level === 2){
                setActiveSubChapter(item);

            //}else{

            //}

        }

        console.log(item)
    }

    return (
        <>  { tocData && tocData.length > 0 ?  (
            <ul>
                {tocData.map((item: any, index: any) => (
                    <li key={index}>
                        <button onClick={() => openChapter(item) }>{item.name}</button>
                        {(activeChapter === item && item.children) && (
                            <ul>
                                {item.children.map((child: any, index: any) => (
                                    <li key={index}>
                                        <button onClick={() => openChapter(child) }>{child.name}</button>
                                        {(activeSubChapter && (activeSubChapter === child && child.children) || activeSubChapter?.parent_id === child.id)  && (
                                            <ul>
                                                {child.children.map((subChild: any, index: any) => (
                                                    <li key={index}>
                                                        <button onClick={() => openChapter(subChild) }>{subChild.name}</button>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        ) : <p>No data found</p> }
        </>
    );
}