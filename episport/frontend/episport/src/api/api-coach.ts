import { Coach, PartialCoach } from '../model/coach';
import axios, { AxiosResponse } from 'axios';import ApiResponse from '../model/api-response';

export default class ApiCoach {

    static async getAll(): Promise<AxiosResponse<ApiResponse<Array<Coach>>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/coach', {
            headers: headers,
            withCredentials: true
        });

    }

    static async getOne(id: number): Promise<AxiosResponse<ApiResponse<Coach>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get(`http://localhost:5000/coach/${id}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async create(coach: Coach): Promise<AxiosResponse<ApiResponse<Coach>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.post('http://localhost:5000/coach', coach, {
            headers: headers,
            withCredentials: true
        });

    }

    static async updateOne(coach: PartialCoach): Promise<AxiosResponse<ApiResponse<Coach>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.patch(`http://localhost:5000/coach/${coach.id}`, coach, {
            headers: headers,
            withCredentials: true
        });  

    }

    static async deleteOne(id: number): Promise<AxiosResponse<ApiResponse<Coach>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.delete(`http://localhost:5000/coach/${id}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async getCoachPicture(id: number): Promise<AxiosResponse<ApiResponse<any>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get(`http://localhost:5000/coach/${id}/picture`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async changeCoachPicture(file: any, id: number): Promise<AxiosResponse<ApiResponse<string>>> {
        
        const headers : any = { 'Content-Type': 'multipart/form-data' };

        return await axios.post(`http://localhost:5000/coach/${id}/picture`, file, {
            headers: headers,
            withCredentials: true
        });

    }

}