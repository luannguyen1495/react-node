import * as userService from './services/userService'
function Login(){
    const login = ()=>{
       const test = userService.login({});
       console.log(test);
    }
    return(
        <>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="User Name" />
                <input type="text" placeholder="Password" />
                <button type="submit" onClick={login}>Submit</button>
            </form>
          
        </>
    )
}

export default Login;