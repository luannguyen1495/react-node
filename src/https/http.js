import axios from 'axios';
import Cookies from 'js-cookie';
const http = axios.create({});
const jwtInterceoptor = axios.create({});
jwtInterceoptor.interceptors.request.use((config={}) => {
       
    console.log(`config ${config}`);
    config.headers.common["Authorization"] = 'Bearer sadadasad';
    return config;
});

export const get = async(url)=>{
    // const token = cookies.get('access_token');
    // http.defaults.headers.common['Authorization'] = `bearer ${Cookies.get('access_token')}`;
    
    // console.log(jwtInterceoptor);
    const response = await jwtInterceoptor.get(url);

    return response.data;
}

export const post = async(url,data,options = {})=>{
    const response = await http.post(url,data,options);
   
    return response.data;
}
export default http;