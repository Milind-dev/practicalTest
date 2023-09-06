import React, { useState } from "react";
import "../css/newtask.css";
import { v4 as uuidv4 } from "uuid";

export default function Newtask() {
  const [inputdatas, setInputdata] = useState("");
  const [newtxtarea, setNewtxtarea] = useState("");
  const [fileimg, setFileimg] = useState();
  const [fileaudio, setFileaudio] = useState();
  const [filevid, setFilevid] = useState();

  function handleChangeFileimg(e) {
    setFileimg(URL.createObjectURL(e.target.files[0]));
    console.log("name", URL.createObjectURL(e.target.files[0]));
  }

  function handleChangeaudio(e) {
    setFileaudio(URL.createObjectURL(e.target.files[0]));
    console.log("audio", URL.createObjectURL(e.target.files[0]));
  }

  // function handleChangevid(e) {
  //   console.log(e.target.files);
  //   setFilevid(URL.createObjectURL(e.target.files[0]));
  //   console.log("vid", URL.createObjectURL(e.target.files[0]));
  // }

  function handleChangevid(e) {
    setFilevid(URL.createObjectURL(e.target.files[0]));
    console.log("vid", URL.createObjectURL(e.target.files[0]));
  }

  function handlesubmit(e) {
    e.preventDefault();
    var items = JSON.parse(localStorage.getItem("item") || "[]");
    var taskitem = {
      id: uuidv4(),
      inputdata: inputdatas,
      newtxtarea: newtxtarea,
      fileimg: fileimg,
      fileaudio: fileaudio,
      filevid: filevid,
    };
    items.push(taskitem);
    localStorage.setItem("item", JSON.stringify(items));
    window.location.href = "/pagination";
  }

  return (
    <div className="taskcontainer">
      <form className="newtask_form" onSubmit={handlesubmit}>
        <button>save</button>
        <input
          type="text"
          placeholder="title"
          value={inputdatas}
          onChange={(e) => setInputdata(e.target.value)}
        />
        <textarea onChange={(e) => setNewtxtarea(e.target.value)}>
          start typing...
        </textarea>

        <input
          type="file"
          name="imageimage_uploads"
          onChange={handleChangeFileimg}
        />
        <img className="imgnewtask" src={fileimg} />

        <input type="file"  onChange={handleChangeaudio} />
        <audio className="imgnewtask" src={fileaudio} />

        {/* src={filevid} */}
        <input type="file"  onChange={handleChangevid} />  
        <video className="imgnewtask" src={filevid} />
      </form>
    </div>
  );
}
