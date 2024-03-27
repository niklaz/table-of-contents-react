import React, {useState, useEffect} from 'react';
import TocAPI from '../api/TocAPI';
import ParseToC from "../utils/ParseToC";
import { Chapter } from '../models/Chapter';
import { useActiveChapter } from '../providers/ChapterProvider';
import Sidebar from "./Sidebar";
import Main from "./Main";


/*
*  Table of Contents component that fetches the data from the API
*
* @returns - JSX.Element
* */
export default function ToC() {
    const { setTocData, setActiveChapter } = useActiveChapter();
    const [loading, setLoading] = useState(true);


    // Fetch the data from the API and parse it to the required format
    useEffect(() => {
        const fetchTocData = async () => {
            const response = await new TocAPI().getTocData();
            if(response.data.content.document) {
                const parsedData = ParseToC(response.data.content.document);
                setTocData(parsedData);
                setActiveChapter(parsedData[0] as Chapter);
            }
            setLoading(false);
        }
        fetchTocData().catch((e) => {
            console.error(e);
            setLoading(false);
        });
    }, [setTocData, setActiveChapter]);

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