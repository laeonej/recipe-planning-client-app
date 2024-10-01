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
    user_id: number
}

export type SignupResponse = {
    user_id: number
}

export type AuthResponse = {
    email: string,
    user_id: number,
}

export type GetUserResponse = {
    email: string,
    username: string,
    user_id: number
}

class UserService {
    http: AxiosInstance;

    constructor(http: AxiosInstance) {
        this.http = http;
    };

    async signup(userData: UserSignupBody): Promise<SignupResponse>  {
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
            return response.data;

        } catch (error: any) {
            const errorMessage = "Failed To Sign Up";
            throw new Error(errorMessage);
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
            return response.data;

        } catch (error: any) {
            const errorMessage = "Failed To Retreive Auth Token";
            throw new Error(errorMessage);
        }
    }

    // this is a sample get query. Update when we implement
    // user page.
    async getUser(userId: number): Promise<GetUserResponse> {
        try {
            const response = await this.http.get('/user/from-id',{
                params: {
                    user_id: userId
                }
            });
            return response.data;

        } catch (error: any) {
            const errorMessage = "Failed To Retreive User";
            throw new Error(errorMessage);
        }
    }


    async getAuth(): Promise<AuthResponse | null> {
        try {
            const response = await this.http.get('/get_cookie_info');
                
            return response.data
        } catch (error: any) {
            return null;
        }
    }

        
};
const userService = new UserService(axiosClient.getInstance());
export default userService;