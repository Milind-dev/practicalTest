
import "../taskshow.css";
import List from "./List";

export default function Taskshows() {
  var gettashshow = JSON.parse(localStorage.getItem("item")) || [];

  return (
    <div className="taskshowcontainer">
      {gettashshow.map((item, index) => {
            const {id,inputdata,newtxtarea,fileimg} = item; 
            // console.log(fileimg)
        return (
          <>
            <List listindex={id} title={inputdata} contents = {newtxtarea} fileimg = {fileimg} />
          </>
        );
      })}
    </div>
  );
}


{/* <div className="taskshowcontent">
              <div key={index}>
                <p>{index}</p>
                <p>{item.id}</p>
                <p>{item.inputdata}</p>
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
            </div> */}