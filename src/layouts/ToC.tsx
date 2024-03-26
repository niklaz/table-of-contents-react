import React, {useState, useEffect} from 'react';
import TocAPI from '../api/TocAPI';
import ParseToC from "../utils/ParseToC";
import { Chapter } from '../models/Chapter';
import Sidebar from "./Sidebar";

export default function ToC() {
    const [tocData, setTocData] = useState<Chapter[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTocData = async () => {
            const response = await new TocAPI().getTocData();
            if(response.data.content.document) {
                const parsedData = ParseToC(response.data.content.document);
                console.log(parsedData)
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
             <Sidebar tocData={tocData} />
            )}
        </>
    );
}