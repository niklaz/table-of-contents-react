import React, {useState, useEffect} from 'react';
import TocAPI from '../api/TocAPI';
import ParseToC from "../utils/ParseToC";
import { Chapter } from '../models/Chapter';
import { ChapterProvider, useActiveChapter } from '../providers/ChapterProvider';
import Sidebar from "./Sidebar";
import Main from "./Main";

export default function ToC() {
    const { tocData, setTocData } = useActiveChapter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTocData = async () => {
            const response = await new TocAPI().getTocData();
            if(response.data.content.document) {
                const parsedData = ParseToC(response.data.content.document);
                setTocData(parsedData);
            }
            setLoading(false);
        }
        fetchTocData().catch((e) => {
            console.error(e);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ? <p>Loading...</p> : (
                    <div className="container">
                        <Sidebar/>
                        <Main />
                    </div>


            )}
        </>
    );
}