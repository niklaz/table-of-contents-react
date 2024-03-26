//import dotenv from 'dotenv';

//dotenv.config();

interface APIConfigEnv {
    API_URL: string;
}

export class APIConfig implements APIConfigEnv {
    API_URL: string;

    constructor() {
        //this.API_URL = process.env.API_URL || 'https://localhost:3004'; // Default value for API_URL
        this.API_URL = 'http://localhost:3004'; // Default value for API_URL
    }
}



