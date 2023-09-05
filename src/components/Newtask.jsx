import React, { useState } from "react";
import "../App.css";
import { v4 as uuidv4 } from "uuid";
export default function Newtask() {
  const [inputdatas, setInputdata] = useState("");
  const [newtxtarea, setNewtxtarea] = useState("");
  
  const [file, setFile] = useState();

  function handleChangeFile(e) {
    console.log(e.target.files);
    // setFile(e.target.files[0].name);
    setFile(URL.createObjectURL(e.target.files[0]));
    console.log("name",URL.createObjectURL(e.target.files[0] ))
  }

  function handlesubmit() {
    // e.preventDefault();
    var items = JSON.parse(localStorage.getItem("item") || "[]");
    var taskitem = {
      id: uuidv4(),
      inputdata: inputdatas,
      newtxtarea:newtxtarea,
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
        <textarea onChange={(e) => setNewtxtarea(e.target.value)}>start typing</textarea>
        <img className="imgnewtask" src={file} />
        <button>click</button>
      </form>
    </div>
    
  );
}
