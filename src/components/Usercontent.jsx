import React from "react";
import { useParams } from "react-router-dom";
import '../usercontent.css'
// import { BrowserRouter as Router, Routes, Route ,useParams ,Link} from "react-router-dom";

export default function Usercontent() {
  // let  usermatchindex = JSON.parse(localStorage.getItem('item')) || []
  let { idx } = useParams();
  let userindex = JSON.parse(localStorage.getItem("item")).filter(
    (users) => users.id === idx
  );
  console.log("userindex", userindex);
  // userindex.filter()
  // let index = userindex.find(id => id == idx);
  // console.log("index",index)
  // console.log("id",id,inputdata)
  return (
    <div className="usercontent" style={{ fontSize: "50px" }}>
      {userindex.map((item, index) => {
        return (
          <>
            {/* <p>{item.id}</p> */}
            <div key={index} className="usercontainer">
              {/* <p>{item.id}</p> */}
              <h1>{item.inputdata}</h1>
              <p>{item.newtxtarea}</p>
              <audio  controls={true}>
                <source type="audio/mp3" src={item.fileaudio}></source>
              </audio>
              <img className="taskshowimg" src={item.fileimg}></img>
              <p>{item.newtxtarea}</p>
              {/* <img className="imgnewtask" src={item.fileimg} /> */}
              <video controls={true}>
                <source type="video/mp4" src={item.filevid} />
                Your browser does not support the video tag.
              </video>
            </div>
          </>
        );
      })}
    </div>
  );
}
