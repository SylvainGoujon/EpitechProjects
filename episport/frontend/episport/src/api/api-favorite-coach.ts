import { Coach } from '../model/coach';
import axios, { AxiosResponse } from 'axios';import ApiResponse from '../model/api-response';

export default class ApiFavoriteCoach {

    static async getAllMine(): Promise<AxiosResponse<ApiResponse<Array<Coach>>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/favorite-coach', {
            headers: headers,
            withCredentials: true
        });

    }

    static async addToMine(coach_id: number): Promise<AxiosResponse<ApiResponse<Coach>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.post(`http://localhost:5000/favorite-coach/coach/${coach_id}`, {
            headers: headers,
            withCredentials: true
        });
         
    }

    static async removeFromMine(coach_id: number): Promise<AxiosResponse<ApiResponse<Coach>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.delete(`http://localhost:5000/favorite-coach/coach/${coach_id}`, {
            headers: headers,
            withCredentials: true
        });
        
    }

}