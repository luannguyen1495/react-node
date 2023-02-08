import axios from 'axios';
const http = axios.create();
export const get = async(url,options = {})=>{
    const response = await http.get(url,options);
   
    return response.data;
}

export const post = async(url,data,options = {})=>{
    const response = await http.post(url,data,options);
   
    return response.data;
}
export default http;