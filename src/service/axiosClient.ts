import axios, { AxiosInstance } from 'axios';

class HttpClient {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_RECIPE_SERVICE_URL as string,
            timeout: 90000,
        });
    } 

    public getInstance(): AxiosInstance {
        return this.instance;
    }
};

const axiosHttpClient = new HttpClient();

export default axiosHttpClient;