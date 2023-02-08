import { Outlet } from "react-router-dom";
import Login from "./Login";

const isAuth = ()=>{
    const user = {status:true}
    return user && user.status;
}
function ProtectedRoutes (){
    const check = isAuth();
    return check ? <Outlet /> : <Login />
}
export default ProtectedRoutes;