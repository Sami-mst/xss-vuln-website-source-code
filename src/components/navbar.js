import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { cookie } from "./login"
import "./styles/text.css"
function handleDisconnect(){
    fetch("http://10.42.0.1:8001/destroy.php",{credentials: 'include'})} // change with the ip of the backend api
    
            


function Navbar(){
    const navigate= useNavigate();
    const [id,setId]=useState()
    cookie(setId)
    return(<ul className="navbar">
        {id ? <li><button onClick={()=>
        {handleDisconnect();
        navigate('/');
        window.location.reload(false);
        }}>Disconnect</button></li> : <li><Link to="/login"><button>Login</button></Link></li>}
        {!id && <li><Link to='/create'><button>Create account</button></Link></li>}
        {id && <li><Link to='/perso'><button>My blogs</button></Link></li>}
        <li><Link to="/"><button>HomePage</button></Link></li>
    </ul>
        
    )
}


export default Navbar