import {useState} from 'react'
import list from "./data/lists"
import "./styles/text.css"
function Search(){
    const[research,update]=useState('')
    return(<div>
        <center><input type="text" onChange={(e)=>update(e.target.value)}/></center>
        <ul className='list'>
        {list.map(x=>x.startsWith(research)&&(<li key={x}>{x}</li>))}
        </ul></div>)
}
export default Search