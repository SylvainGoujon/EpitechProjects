import { Video } from '../model/video'
import axios, { AxiosResponse } from 'axios';import ApiResponse from '../model/api-response';

export default class ApiFavoriteVideo {

    static async getAllMine(): Promise<AxiosResponse<ApiResponse<Array<Video>>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/favorite-video', {
            headers: headers,
            withCredentials: true
        });

    }

    static async addToMine(video_id: number): Promise<AxiosResponse<ApiResponse<Video>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.post(`http://localhost:5000/favorite-video/video/${video_id}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async removeFromMine(video_id: number): Promise<AxiosResponse<ApiResponse<Video>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.delete(`http://localhost:5000/favorite-video/video/${video_id}`, {
            headers: headers,
            withCredentials: true
        });

    }

}