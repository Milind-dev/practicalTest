// import { Player } from 'video-react';
import "../taskshow.css";

export default function Taskshow() {
  var gettashshow = JSON.parse(localStorage.getItem("item")) || [];

  // var audio = "http://streaming.tdiradio.com:8000/house.mp3";
  // var audio = "";
  return (
    <div className="taskshowcontainer">
      {gettashshow.map((item, index) => {
        return (
          <>
            <div className="taskshowcontent">
              <div key={index}>
                <p>{item.id}</p>
                <img className="taskshowimg" src={item.fileimg}></img>
                {/* <img src='blob:http://localhost:3000/95c0de44-5bb8-4bf3-b2ff-0d53d9de5000' /> */}
                <p>{item.newtxtarea}</p>
                {/* <input type='file' accept='audio/*' /> */}
                {/* <audio type='audio.ogg' controls={true} src={item.fileaudio}></audio> */}
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
