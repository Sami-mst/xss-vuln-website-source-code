import {useEffect, useState} from 'react'
import "./styles/text.css";
function send(obj){
    fetch('http://10.42.0.1:8001/add.php', { // change with the ip of the backend api
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      
    },
    body: JSON.stringify(obj)
  })}
function Create({id}){
    const [name,updateName]=useState('')
    const [content,updateContent]=useState('')
    const [error,seterror]=useState(false)
    function Error(){
      return(<p color='red'>
        error ! empty input(s)
      </p>)
    }
    return(
        <div>
         <form className="create">
            <input placeholder='Name' type="textarea" onChange={(e)=>(updateName(e.target.value))} value={name}></input>
            <input placeholder='content' type="textarea" onChange={(e)=>(updateContent(e.target.value))} value={content}></input>

            <button className='button' onClick={(e)=>{
              
                if (name&&content){
                  send({
                    title:name,
                    content:content,
                    authorID:id})}
                  
                else{
                  e.preventDefault()
                  seterror(true)
                }

            }}>submit</button>
            {error && (<Error />)}
        </form>
        </div>
    )
}
export default Create