import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';


/*
* ApiService class to make API requests
*
* @param baseURL - Base URL for the API
* @method get - Method to make GET requests
* @method post - Method to make POST requests
* @method put - Method to make PUT requests
* @method delete - Method to make DELETE requests
* @property baseURL - Getter and Setter for baseURL
* @property client - AxiosInstance for making requests
*
* */
export class ApiService {
    private client: AxiosInstance;
    private _baseURL: string;

    constructor(baseURL: string) {
        this._baseURL = baseURL;
        this.client = axios.create({
            baseURL: this._baseURL,
        });
    }

    // Getter for baseURL
    get baseURL(): string {
        return this._baseURL;
    }

    // Setter for baseURL
    set baseURL(url: string) {
        this._baseURL = url;
        this.client.defaults.baseURL = this._baseURL;
    }

    // Method to make GET requests
    public async get<T = any, R = AxiosResponse<T>>(endpoint: string, config?: AxiosRequestConfig): Promise<R> {
        return this.client.get<T, R>(endpoint, config);
    }

    // Method to make POST requests
    public async post<T = any, R = AxiosResponse<T>>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
        return this.client.post<T, R>(endpoint, data, config);
    }

    // Method to make PUT requests
    public async put<T = any, R = AxiosResponse<T>>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<R> {
        return this.client.put<T, R>(endpoint, data, config);
    }

    // Method to make DELETE requests
    public async delete<T = any, R = AxiosResponse<T>>(endpoint: string, config?: AxiosRequestConfig): Promise<R> {
        return this.client.delete<T, R>(endpoint, config);
    }
}