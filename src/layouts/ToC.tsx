import React, {useState, useEffect} from 'react';
import TocAPI from '../api/TocAPI';


export default function ToC() {
    const [tocData, setTocData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTocData = async () => {
            const response = await new TocAPI().getTocData();
            if(response.data.content.document) {
                setTocData(response.data.content.document);
            }
            setLoading(false);
        }
        fetchTocData().catch((e) => {
            console.error(e);
            setLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>Table of Contents</h1>
            {loading ? <p>Loading...</p> : (
                <ul>
                    {tocData.map((item: any, index: any) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}