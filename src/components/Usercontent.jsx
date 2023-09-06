import React from "react";
import { useParams } from "react-router-dom";
import "../css/usercontent.css";

export default function Usercontent() {
  // let  usermatchindex = JSON.parse(localStorage.getItem('item')) || []
  let { idx } = useParams();
  let userindex = JSON.parse(localStorage.getItem("item")).filter(
    (users) => users.id === idx
  );
  return (
    <div className="usercontent">
      {userindex.map((item, index) => {
        return (
          <>
            {/* <p>{item.id}</p> */}
            <div key={index} className="usercontainer">
              <h1>{item.inputdata}</h1>
              <p>{item.newtxtarea}</p>
              <audio controls={true}>
                <source type="audio/mp3" src={item.fileaudio}></source>
              </audio>
              <img className="taskshowimg" src={item.fileimg}></img>
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
