import * as http from '../https/http';
import jwtInterceptor from '../https/private'
const urlApi = 'http://localhost:3000/api/danh_muc';
export const getAll = async()=>{
    try {
       
        const res = await jwtInterceptor.get(urlApi);
        
        return res;
        
    } catch (error) {
        console.log(error);
    }
}
