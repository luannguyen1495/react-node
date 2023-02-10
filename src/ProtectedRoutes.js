import { Outlet } from "react-router-dom";
import Login from "./Login";
import Cookies from 'js-cookie';
const isAuth = ()=>{

    // console.log(Cookies.get('access_token'))
    const user = {status:true}
    return user && user.status;
}
function ProtectedRoutes (){
    const check = isAuth();
    return check ? <Outlet /> : <Login />
}
export default ProtectedRoutes;