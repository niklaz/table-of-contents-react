import React from "react";
import { Chapter } from "../models/Chapter";
import {useActiveChapter} from "../providers/ChapterProvider";


/*
* interface for ChapterListItemProps that takes item of type Chapter
*
* @param item - Chapter
* */
interface ChapterListItemProps {
    item: Chapter;
}

export default function ChapterListItem({item} : ChapterListItemProps){
  const { activeChapter,setActiveChapter, setActiveSubChapter } = useActiveChapter();

  const openChapter = (item: Chapter) => {
    //check if item level is 1 or 2 and set active chapter accordingly
    if(item.level && item.level !== 3){
      setActiveChapter(item);
      setActiveSubChapter(null);
    } else {
      setActiveSubChapter(item);
    }
    //get element id "chapter-" + item.id and scroll to it
    const element = document.getElementById("chapter-" + item.id);
    if(element){
      element.scrollIntoView({behavior: "smooth"});
    }
  }
  //TODO, optimize this line
  const active = ((activeChapter && activeChapter.children !== undefined && activeChapter.children.length > 0 && activeChapter === item) || activeChapter?.parent_id === item.id) ? "active" : "";
    return (
            <>
              <li className={"list-item level-" + item.level + " " + active}>
                <button onClick={() => openChapter(item)}>{item.name}</button>
                {(item.children && (activeChapter === item || activeChapter?.parent_id === item.id)) && (
                    <ul>
                      {item.children.map((child: Chapter, index: number) => (
                       <ChapterListItem item={child} key={index}  />
                      ))}
                    </ul>
                )}
              </li>
            </>
          );
  }