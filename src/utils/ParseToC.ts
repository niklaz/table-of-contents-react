import { Chapter } from '../models/Chapter';


/*
*  Parse the flat array of chapters into a tree structure
*
* @param chapters - Chapter[]
* @returns - Chapter[]
*
* */
export default function ParseToC(chapters: Chapter[]): Chapter[]{
    const chapterMap: { [key: string]: Chapter } = {}; // A map to hold chapters by their ids

    // First pass to initialize each chapter and its children array
    chapters.forEach((chapter) => {
        chapterMap[chapter.id] = { ...chapter, children: [] };
    });

    const result: Chapter[] = []; // This will hold the top-level chapters

    // Second pass to fill in the children arrays and build the hierarchy
    chapters.forEach((chapter) => {
        if (chapter.parent_id) {
            chapterMap[chapter.parent_id].children?.push(chapterMap[chapter.id]);
        } else {
            result.push(chapterMap[chapter.id]);
        }
    });

    return result;
};