import { Video, PartialVideo } from '../model/video';
import axios, { AxiosResponse } from 'axios';
import ApiResponse from '../model/api-response';

export default class ApiVideo {

    static async getAll(): Promise<AxiosResponse<ApiResponse<Array<Video>>>> {
    
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/video', {
            headers: headers,
            withCredentials: true
        });

    }

    static async getByCoach(coach_id: number): Promise<AxiosResponse<ApiResponse<Array<Video>>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get(`http://localhost:5000/video/coach/${coach_id}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async getByCategory(category_id: number): Promise<AxiosResponse<ApiResponse<Array<Video>>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get(`http://localhost:5000/video/category/${category_id}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async getByQuery(query: string): Promise<AxiosResponse<ApiResponse<Array<Video>>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get(`http://localhost:5000/video/search?query=${query}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async getOne(id: number): Promise<AxiosResponse<ApiResponse<Video>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get(`http://localhost:5000/video/${id}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async create(video: Video): Promise<AxiosResponse<ApiResponse<Video>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.post('http://localhost:5000/video', video, {
            headers: headers,
            withCredentials: true
        });

    }

    static async updateOne(video: PartialVideo): Promise<AxiosResponse<ApiResponse<Video>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.patch(`http://localhost:5000/video/${video.id}`, video, {
            headers: headers,
            withCredentials: true
        });

    }

    static async deleteOne(id: number): Promise<AxiosResponse<ApiResponse<Video>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.delete(`http://localhost:5000/video/${id}`, {
            headers: headers,
            withCredentials: true
        });

    }

}