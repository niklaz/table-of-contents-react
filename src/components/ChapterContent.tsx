import React from "react";
import {Chapter} from "../models/Chapter";
import {useActiveChapter} from "../providers/ChapterProvider";


/*
*  ChapterContent component that displays the content of the selected chapter and its children
* */
export default function ChapterContent() {
    const { activeChapter, activeSubChapter, setActiveChapter, setActiveSubChapter, tocData, setTocData } = useActiveChapter();

    return (
      <>
          {activeChapter ? (
              <div className="chapter parent-chapter" id={ "chapter-" + activeChapter.id}>
                  <h3>{activeChapter.name}</h3>
                  <p>{activeChapter.content}</p>
                  { activeChapter.children && activeChapter.children.length > 0 && (
                      <div className="chapter-children">
                          {activeChapter.children.map((child, index) => (
                              <div key={index} className="chapter child-chapter" id={ "chapter-" + child.id}>
                                  <h4>{child.name}</h4>
                                  <p>{child.content}</p>
                              </div>
                          ))}
                      </div>
                  )}
              </div>
          ) : (
              <p>Please select a chapter</p>
          )}
      </>
  );
}