export interface Chapter {
    id: string;
    name: string;
    level: number;
    parent_id: string;
    content: string;
    children?: Chapter[]; // Optional property to hold child chapters
}