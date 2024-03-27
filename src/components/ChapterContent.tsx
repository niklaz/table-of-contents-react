import React from "react";
import {useActiveChapter} from "../providers/ChapterProvider";


/*
*  ChapterContent component that displays the content of the selected chapter and its children
* */
export default function ChapterContent() {
    const { activeChapter } = useActiveChapter();

    return (
      <>
          {activeChapter ? (
              <div className="chapter parent-chapter" id={"chapter-" + activeChapter.id}>
                  <h3 className="heading">{activeChapter.name}</h3>
                  <div className="chapter-content">{activeChapter.content}</div>
                  {activeChapter.children && activeChapter.children.length > 0 && (
                      <div className="chapter-children">
                          {activeChapter.children.map((child, index) => (
                              <div key={index} className="chapter child-chapter" id={"chapter-" + child.id}>
                                  <h3 className="heading">{child.name}</h3>
                                  <div className="chapter-content">{child.content}</div>
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