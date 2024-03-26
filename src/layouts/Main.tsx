import React from "react";
import {ChapterProvider, useActiveChapter} from "../providers/ChapterProvider";
import Sidebar from "./Sidebar";

/*
* Display the main content of the active Table of Content's chapter and its children.
* */
export default function Main() {

  const { activeChapter, activeSubChapter } = useActiveChapter();
  return (
      <>
        <div>
            {activeChapter ? (
                <div className="chapter parent-chapter">
                    <h3>{activeChapter.name}</h3>
                    <p>{activeChapter.content}</p>
                    { activeChapter.children && activeChapter.children.length > 0 && (
                        <div className="chapter-children">
                            {activeChapter.children.map((child, index) => (
                                <div key={index} className="chapter child-chapter">
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
        </div>
      </>
  );
}