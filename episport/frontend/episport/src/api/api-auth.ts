import RegisterForm from '../model/register-form';
import Credentials from '../model/credentials';
import ApiResponse from '../model/api-response';
import axios, { AxiosResponse } from 'axios';
import { User } from '../model/user';

export default class ApiAuth {

    static async login(credentials: Credentials): Promise<AxiosResponse<ApiResponse<null>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.post('http://localhost:5000/auth/login', credentials, {
            headers: headers,
            withCredentials: true
        });       

    }

    static async register(form: RegisterForm): Promise<AxiosResponse<ApiResponse<User>>> {
        
        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.post('http://localhost:5000/user', form, {
            headers: headers
        });
            
    }
    
    static async logout(): Promise<AxiosResponse<ApiResponse<null>>> {

        const headers : any = { 'Content-Type': 'application/json' };

        return await axios.get('http://localhost:5000/auth/logout', {
            headers: headers,
            withCredentials: true
        });
        
    }

}

/* How to use these functions in component?
/* Exemple:

    ApiAuth.register(...)
    .then(response => {
        .... success request do what you want
    })
    .catch(error => {
        .... error.response.data.message contains the error message return by API
        .... error do what you want
    })

*/