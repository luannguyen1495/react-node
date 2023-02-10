import * as http from '../https/http';
const urlApi = 'http://localhost:4000/api/login';
export const login = async(data)=>{
    try {
        const res = await http.post(urlApi,data);
       
        return res;
        
    } catch (error) {
        console.log(error);
    }
}
