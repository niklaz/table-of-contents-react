import React from "react";
import { Chapter } from "../models/Chapter";

export default function Sidebar({tocData}: any) {

    const [activeChapter, setActiveChapter] = React.useState<Chapter | null>(null);
    const [activeSubChapter, setActiveSubChapter] = React.useState<Chapter | null>(null);

    const openChapter = (item: Chapter) => {
        //check if item level is 1 or 2 and set active chapter accordingly
        if(item.level && item.level === 1){
            setActiveChapter(item);
            setActiveSubChapter(null);
        } else {
            setActiveSubChapter(item);
        }

        console.log(item)
    }

  return (
      <>
          <ul>
              {tocData.map((item: any, index: any) => (
                  <li key={index}>
                      <button onClick={() => openChapter(item) }>{item.name}</button>
                        {activeChapter === item && item.children && (
                            <ul>
                                {item.children.map((child: any, index: any) => (
                                    <li key={index}>
                                        <button onClick={() => openChapter(child) }>{child.name}</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                  </li>
              ))}
          </ul>
      </>
  );
}