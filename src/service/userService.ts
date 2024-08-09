import { AxiosInstance } from "axios";
import axiosClient from "./axiosClient";


export type UserLoginBody = {
    email: string,
    password: string
}

export type UserSignupBody = {
    email: string,
    username: string,
    password: string
}

export type LoginResponse = {
    access_token: string,
    token_type: string,
}

class UserService {
    http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
    };

    async signup(userData: UserSignupBody): Promise<any>  {
        try {
            const response = await this.http.post('/signup', {
                email: userData.email,
                username: userData.username,
                password: userData.password,
            },
            {
                headers: {
                    'content-type': 'application/json'
                }
            }
            );
            return response.data

        } catch (error: any) {
            const errorMessage = "Failed To Sign Up"
            throw new Error(errorMessage)
        }
    }


    async login(userData: UserLoginBody): Promise<LoginResponse>  {
        try {
            const response = await this.http.post('/token', {
                username: userData.email,
                password: userData.password,
            },
            {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                }
            },
            );
            return response.data

        } catch (error: any) {
            const errorMessage = "Failed To Retreive Auth Token"
            throw new Error(errorMessage)
        }
    }

    async getUser(): Promise<any> {
        try {
            const response = await this.http.get('/user', {
                withCredentials: true
            });

            return response.data

        } catch (error: any) {
            const errorMessage = "Failed To Retreive User"
            throw new Error(errorMessage)
        }
    }

        
};
const userService = new UserService(axiosClient.getInstance())
export default userService;