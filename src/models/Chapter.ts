/*
*  Chapter Interface
*
* @param id - string
* @param name - string
* @param level - number
* @param parent_id - string
* @param content - string
* @param children - Chapter[]
* */
export interface Chapter {
    id: string;
    name: string;
    level: number;
    parent_id: string;
    content: string;
    children?: Chapter[]; // Optional property to hold child chapters
}

