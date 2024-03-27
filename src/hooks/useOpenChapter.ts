import {useActiveChapter} from "../providers/ChapterProvider";
import { Chapter } from '../models/Chapter';


/*
*  Hook that opens a chapter and scrolls to it
*
* @returns openChapter function
*
* */
export default function useOpenChapter (){
    const { setActiveChapter, setActiveSubChapter }  = useActiveChapter();

   return (item : Chapter) => {
        if (item.level && item.level !== 3) {
            setActiveChapter(item);
            setActiveSubChapter(null);
        } else {
            setActiveSubChapter(item);
        }
        const element = document.getElementById("chapter-" + item.id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
};

