import React from 'react'
import "../taskshow.css";

export default function Taskshow() {
  var gettashshow = JSON.parse(localStorage.getItem('item')) || []

  // if(gettashshow.length < 0){
  //   return ;
  // }
  // else{
  //   return gettashshow;
  // }

  
  return (
    <div>
        {gettashshow.map((item,index) => {  
        return(
                <>
                <div key={index}>
                    <p>{item.id}</p>
                    <img className='taskshowimg' src={item.file}></img>
                    <p>{item.newtxtarea}</p>
                    {/* <a href={item.file}> </a> */}
                    {/* <p>{item.file}</p> */}
                    {/* <img src='blob:http://localhost:3000/95c0de44-5bb8-4bf3-b2ff-0d53d9de5000' /> */}
                </div>
                </>
            )
        })}
    </div>
  )
}
