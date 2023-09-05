import React, { useState } from "react";
import "../newtask.css";
import { v4 as uuidv4 } from "uuid";
export default function Newtask() {
  const [inputdatas, setInputdata] = useState("");
  const [newtxtarea, setNewtxtarea] = useState("");

  const [fileimg, setFileimg] = useState();
  const [fileaudio, setFileaudio] = useState();
  const [filevid, setFilevid] = useState();


  function handleChangeFileimg(e) {
    // console.log(e.target.files);
    // setFile(e.target.files[0].name);
    // const audiourl = URL.createObjectURL();

    setFileimg(URL.createObjectURL(e.target.files[0]));
    console.log("name", URL.createObjectURL(e.target.files[0]));
  }

  function handleChangeaudio(e) {
    console.log(e.target.files);
    // setFile(e.target.files[0].name);
    setFileaudio(URL.createObjectURL(e.target.files[0]));
    console.log("audio", URL.createObjectURL(e.target.files[0]));
  }

  function handleChangevid(e) {
    console.log(e.target.files);
    // setFile(e.target.files[0].name);
    setFilevid(URL.createObjectURL(e.target.files[0]));
    console.log("vid", URL.createObjectURL(e.target.files[0]));
  }

  function handleChangevid(e) {
    console.log(e.target.files);
    // setFile(e.target.files[0].name);
    setFilevid(URL.createObjectURL(e.target.files[0]));
    console.log("vid", URL.createObjectURL(e.target.files[0]));
  }

  function handlesubmit() {
    // e.preventDefault();
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
  }

  return (
    <div className="taskcontainer">
      <form className="newtask_form" onSubmit={handlesubmit}>

        <h1>form data</h1>

        <input
          type="text"
          // name="Inputdata"
          placeholder="taskin"
          value={inputdatas}
          onChange={(e) => setInputdata(e.target.value)}
        />

        <input type="file" onChange={handleChangeFileimg} />
        <img className="imgnewtask" src={fileimg} />

        <textarea onChange={(e) => setNewtxtarea(e.target.value)}>
          start typing
        </textarea>

        <input type="file" src={fileaudio} onChange={handleChangeaudio} />
        <audio className="imgnewtask" src={fileaudio} />

        <input type="file" src={filevid} onChange={handleChangevid} />
        <video className="imgnewtask" src={filevid} />

        {/* <input type="file"  src={setFilevid} onChange={handleChangeVid} /> */}
        <button>click</button>
      </form>
    </div>
  );
}




import "../taskshow.css";

export default function Taskshow() {
  var gettashshow = JSON.parse(localStorage.getItem("item")) || [];

  // var audio = "http://streaming.tdiradio.com:8000/house.mp3";
  return (
    <div className="taskshowcontainer">
      {gettashshow.map((item, index) => {
        return (
          <>
            <div className="taskshowcontent">
              <div key={index}>
                <p>{item.id}</p>
                <img className="taskshowimg" src={item.fileimg}></img>
                <p>{item.newtxtarea}</p>
                <audio controls={true}>
                  <source type="audio/mp3" src={item.fileaudio}></source>
                </audio>

                <video controls={true}>
                  <source type="video/mp4" src={item.filevid} />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
