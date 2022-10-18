import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { delet } from "./blogs";
import { cookie } from "./login";
function Perso(){
    const [id,setId]=useState()
    cookie(setId)
    const [data,change]=useState([])
    useEffect(()=>{fetch(`http://10.42.0.1:8001/perso.php?id=${id}`,{Origin : 'http://10.42.0.1:3000/'}).then((res) => {return res.json();}).then((data)=>{change(data)})});// change with the ip of the backend api
    return(
        <div>
            <p className="blog-preview">your blogs list : </p>
        <ul>
            {data.map(x=>(
            <li className='blog-preview' key={x.id}>
                <Link to={`/show/${x.id}`} >
                    {x.title}
                <p>author : {x.username}</p>
                </Link>
                <button onClick={()=>delet(x.id)}>DELETE</button>
                </li>
            ))}
        </ul> 
        </div>
    )
}
export default Perso