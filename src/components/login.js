import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import  { BrowserRouter, Navigate, useNavigate } from 'react-router-dom'
function Empty(){
    return <p>empty username or password</p>
}
function post(obj,setAuth){
fetch(`http://10.42.0.1:8001/login.php`, // change with the ip of the backend api
{Origin : 'http://10.42.0.1:3000/',
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'},
body: JSON.stringify(obj)})
.then((res) => {return res.json();}).then((data)=>{setAuth(data['id']);Cookies.set('PHPSESSID' ,data['session'])})}


function LoginForm({setAuth,setSess}){
    
    const [password,changePass]=useState('')
    const [username,changeUser]=useState('')
    return(         
    <form className="create">
    <input placeholder='Username' type="textarea" onChange={(e)=>(changeUser(e.target.value))} value={username}></input>
    <input placeholder='Password' type="password" onChange={(e)=>(changePass(e.target.value))} value={password}></input>
    <button onClick={(e)=>{
            e.preventDefault()

            post({
                username:username,
                password:password
            },setAuth,setSess)

            }
        }>submit</button>
    
</form>)
}
function Message(){
    const navigate= useNavigate();
        setTimeout(()=>{
            navigate("/");
            window.location.reload(false);
        },2000)
}
export function cookie(setAuth){
    fetch("http://10.42.0.1:8001/login.php",{credentials: 'include'}).then((res) => {return res.json();}).then((data)=>{setAuth(data)})}

function Login(){
    const [sess,setSess]=useState()
    const [auth,setAuth]=useState('')
    const [loading,load]=useState(false)
    const session = Cookies.get('PHPSESSID')
    if (session){
        cookie(setAuth)
    }
    return(
    <div className="create">
    {loading && <p>loading</p>}
    <LoginForm setAuth={setAuth} setSess={setSess} />
    {auth===0 && <p>nop</p>}
    {auth>0 && <p>login succesful , redirecting you !</p>}
    {auth>0 && <Message/>}
    </div>)
}
export default Login
