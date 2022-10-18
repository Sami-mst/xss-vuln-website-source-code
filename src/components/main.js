import { useState } from "react";
import Blogs from "./blogs";
import Create from "./create";
import { cookie } from "./login";

function Home(){
    const [id,setId]=useState()
    cookie(setId)
    return (<div>
        {id && <Create id={id}/>}
        <Blogs id={id}/>
        </div>
    )
}
export default Home