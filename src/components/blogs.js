import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { cookie } from './login';
export function delet(id){
    fetch(`http://10.42.0.1:8001?delete=${id}`, { // change with the ip of the backend api
  })
  window.location.reload();}
function Blogs({id}){
    const [data,change]=useState([])
    useEffect(()=>{fetch("http://10.42.0.1:8001",{Origin : 'http://10.42.0.1:3000/'}).then((res) => {return res.json();}).then((data)=>{change(data)})},[]); 
    return(
        <ul>
            {data.map(x=>(
            <li className='blog-preview' key={x.id}>
                <Link to={`/show/${x.id}`} >
                    <p><div dangerouslySetInnerHTML={{__html:x.title}}></div></p>
                <p>author : {x.username}</p>
                </Link>
                {id==x.authorID && <button onClick={()=>delet(x.id)}>delete</button>}
                </li>
            ))}
        </ul>
    )
}
export default Blogs