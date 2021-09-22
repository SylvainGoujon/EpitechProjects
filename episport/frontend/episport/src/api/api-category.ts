import ApiResponse from '../model/api-response';
import { Category, PartialCategory } from '../model/category';
import axios, { AxiosResponse } from 'axios';
export default class ApiCategory {

    static async getAll(): Promise<AxiosResponse<ApiResponse<Array<Category>>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/category', {
            headers: headers,
            withCredentials: true
        });

    }

    static async getOne(id: number): Promise<AxiosResponse<ApiResponse<Category>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get(`http://localhost:5000/category/${id}`, {
            headers: headers,
            withCredentials: true
        });

    }

    static async create(category: Category): Promise<AxiosResponse<ApiResponse<Category>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.post('http://localhost:5000/category', category, {
            headers: headers,
            withCredentials: true
        }); 

    }

    static async updateOne(category: PartialCategory): Promise<AxiosResponse<ApiResponse<Category>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.patch(`http://localhost:5000/category/${category.id}`, category, {
            headers: headers,
            withCredentials: true
        }); 

    }

    static async deleteOne(id: number): Promise<AxiosResponse<ApiResponse<Category>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.delete(`http://localhost:5000/category/${id}`, {
            headers: headers,
            withCredentials: true
        }); 
        
    }

}