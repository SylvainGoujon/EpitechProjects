import { User, PartialUser } from '../model/user';
import axios, { AxiosResponse } from 'axios';
import ApiResponse from '../model/api-response';

export default class ApiUser {

    static async getAll(): Promise<AxiosResponse<ApiResponse<Array<User>>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/user', {
            headers: headers,
            withCredentials: true
        });

    }

    static async getMe(): Promise<AxiosResponse<ApiResponse<User>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/user/me', {
            headers: headers,
            withCredentials: true
        });

    }

    static async updateOne(user: PartialUser): Promise<AxiosResponse<ApiResponse<User>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.patch(`http://localhost:5000/user/${user.id}`, user, {
            headers: headers,
            withCredentials: true
        });  

    }

    static async updateMe(user: User): Promise<AxiosResponse<ApiResponse<User>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.patch('http://localhost:5000/user/me', user, {
            headers: headers,
            withCredentials: true
        });  

    }

    static async deleteOne(id: number): Promise<AxiosResponse<ApiResponse<User>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.delete(`http://localhost:5000/user/${id}`, {
            headers: headers,
            withCredentials: true
        });

    }
}