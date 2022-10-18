import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { cookie } from "./login";


function post(obj,setAuth){
    fetch(`http://10.42.0.1:8001/create.php`, // change with the ip of the backend api
    {Origin : 'http://10.42.0.1:3000/',
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'},
    body: JSON.stringify(obj)})
    .then((res) => {return res.json();}).then((data)=>{setAuth(data['ok'])})}


function Message(){
    const navigate= useNavigate();
        setTimeout(()=>{
            navigate('/login');
            window.location.reload(false);
        },2000)
}
function CreateAccount(){        
    const [password,changePass]=useState('')
    const [username,changeUser]=useState('')
    const [passwordConfirm,confirmation]=useState('')
    const [ok,setOk]=useState('')
    const [id,setid]=useState('')
    const [sec,setSuc]=useState('')
    const [error,setError]=useState(false)
    useEffect(()=>cookie(setid),[])
    if (id){
        return (<Navigate to='/'/>)
    }
    else{
        return (
    <form className="create">
        <input placeholder='create Username' type="textarea" onChange={(e)=>(changeUser(e.target.value))} value={username}></input>
        <input placeholder='create Password' type="password" onChange={(e)=>(changePass(e.target.value))} value={password}></input>
        <input placeholder='confirm Password' type="password" onChange={(e)=>(confirmation(e.target.value))} value={passwordConfirm}></input>
        <button onClick={(e)=>{
            setError(false)
            e.preventDefault()
            if(username&&password&&passwordConfirm&&password===passwordConfirm){
            post({
                username:username,
                password:password,
                passwordConfirm:passwordConfirm
            },setOk)
            }
            else{
            setError(true)
            }
        }
        }>submit</button>
            {ok===1 && <p>success , will be redirecting you</p>}
            {ok===1 && <Message/>}
            {ok===0 && <p>username already exist , choose another one</p>}
            {error&&<p>there was an error , check your input</p>}
    
    </form>)
    }
}
export default CreateAccount