import axios from "axios";
import Cookies from 'js-cookie';
const jwtInterceoptor = axios.create({});
 
jwtInterceoptor.interceptors.request.use((config) => {
//   let tokensData = JSON.parse(localStorage.getItem("tokens"));
    const token = Cookies.get('access_token');
    config.headers.Authorization = `Bearer ${token}`;
    
    return config;
});
 
jwtInterceoptor.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) =>{
    if(error){
      
       if(error.response.status == 403){
       
        const Rtoken = Cookies.get('refresh_token');
     
        let apiResponse = await axios.post('http://localhost:4000/token',{
            refreshToken:Rtoken
        });
        Cookies.set('access_token', apiResponse.data.token, { path: '/',})
        Cookies.set('refresh_token', apiResponse.data.refreshToken, {path: '/'});
        error.config.Authorization =  apiResponse.data.token;
        return axios(error.config);
       }
    } 
  }
);
export default jwtInterceoptor;