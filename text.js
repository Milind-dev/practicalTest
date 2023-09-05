import React, { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
export default function Newtask() {
  const [inputdatas, setInputdata] = useState("");
  const [file, setFile] = useState();

  function handleChangeFile(e) {
    console.log(e.target.files);
    // setFile(e.target.files[0].name);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log("name",URL.createObjectURL(e.target.files[0] ))
  }

  function handlesubmit(e) {
    e.preventDefault();
    var items = JSON.parse(localStorage.getItem("item") || "[]");
    var taskitem = {
      id: uuidv4(),
      inputdata: inputdatas,
      file: file,
    };
    items.push(taskitem);
    localStorage.setItem("item", JSON.stringify(items));
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h1>form data</h1>
        <input
          type="text"
          // name="Inputdata"
          placeholder="taskin"
          value={inputdatas}
          onChange={(e) => setInputdata(e.target.value)}
        />
        <input type="file" onChange={handleChangeFile} />
        <img className="imgnewtask" src={file} />
        <button>click</button>
      </form>
    </div>
    
  );
}




import React from 'react'

export default function Taskshow() {
  try{
  var gettashshow = JSON.parse(localStorage.getItem('item')) || "[]"
  console.log("gettashshow",gettashshow)

  }
      catch(err){console.log(err)}
  return (
    <div>
        {gettashshow.map((item,index) => {  
          // const {file,id,inputdata} = item;
          // console.log(file,id,inputdata)          
        return(
                <>
                    <p>{item.id}</p>
                    <a href={item.file}> </a>
                    <p>{item.file}</p>
                    <img src={item.file}></img>
                    {/* <img src='blob:http://localhost:3000/95c0de44-5bb8-4bf3-b2ff-0d53d9de5000' /> */}
                </>
            )
        })}
    </div>
  )
}
