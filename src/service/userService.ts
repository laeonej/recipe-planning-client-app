import { AxiosInstance } from "axios";
import axiosClient from "./axiosClient";


export type UserLoginBody = {
    email: string,
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

        
};
const userService = new UserService(axiosClient.getInstance())
export default userService;