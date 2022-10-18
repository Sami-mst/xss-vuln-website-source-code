import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
function Show(){
    const id = useParams().id
    const [data,change]=useState([])
    useEffect(()=>{fetch(`http://10.42.0.1:8001/show.php?id=${id}`,{Origin : 'http://10.42.0.1:3000/'}).then((res) => {return res.json();}).then((data)=>{change(data)})},[]); // change with the ip of the backend api
    return(
        <div>{data.map(x=> (<p dangerouslySetInnerHTML={{__html:x.content}}></p>))}
        <Link to='/'><button>go back</button></Link></div>
    )
}
export default Show