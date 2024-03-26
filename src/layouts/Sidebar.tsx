import React from "react";
import { Chapter } from "../models/Chapter";
import { useActiveChapter } from "../providers/ChapterProvider";
import ToCTree from "../components/ToCTree";



/*
*  Sidebar component that displays the list of chapters and subchapters
*
* @param {tocData} - list of chapters and subchapters
* @returns {JSX.Element} - Sidebar component
*
* */
export default function Sidebar() {


  return (
      <>
            <ToCTree/>
      </>
  );
}