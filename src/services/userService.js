import * as http from '../https/http';
const urlApi = 'http://localhost:8080/api/danh_muc';
export const login = async(data)=>{
    try {
        const res = await http.post(urlApi,data);
       
        return res;
        
    } catch (error) {
        console.log(error);
    }
}
