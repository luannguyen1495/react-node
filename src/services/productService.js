import * as http from '../https/http';
const urlApi = 'http://localhost:8080/api/danh_muc';
export const getAll = async()=>{
    try {
        const res = await http.get(urlApi);
       
        return res;
        
    } catch (error) {
        console.log(error);
    }
}
