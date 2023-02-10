import * as userService from './services/userService';
import { useCookies } from 'react-cookie'
import { useState } from 'react';
function Login(){
    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token']);
    const [selectedImage,setselectedImage] = useState();
    const parseJwt = (token) => {
        try {
          return JSON.parse(atob(token.split(".")[1]));
        } catch (e) {
          return null;
        }
      };

    const login = async ()=>{
       const test = await userService.login({
        email:'test@gmail.com',
        password:'123456'
       });
       console.log(parseJwt(test.token));
       let expires = new Date()
        expires.setTime(expires.getTime() + (10 * 1000))
       
        setCookie('access_token', test.token, { path: '/',})
        setCookie('refresh_token', test.refreshToken, {path: '/'});
        
    }
    const changeFile = (event)=>{
        setselectedImage(event.target.files[0])
    }
    return(
        <>   {selectedImage && (
            <h1>Login {URL.createObjectURL(selectedImage)}</h1>
            )}
            <form>
                <input type="text" placeholder="User Name" />
                <input type="text" placeholder="Password" />
                <input type="file" onChange={changeFile}/>
                {selectedImage && (
                <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                )}
                <button type="button" onClick={login}>Submit</button>
            </form>
          
        </>
    )
}

export default Login;