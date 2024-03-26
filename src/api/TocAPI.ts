import {ApiService} from '../services/ApiService';
import {APIConfig} from "../config/APIConfig";

export default class TocAPI {

    private apiService: ApiService;
    //base url from config
    private baseURL: string = new APIConfig().API_URL;

    constructor() {
        this.apiService = new ApiService(this.baseURL);
    }

    public async getTocData() {
        return this.apiService.get('/data');
    }
}