import "../css/taskshow.css";
import List from "./List";

export default function Taskshows() {
  var gettashshow = JSON.parse(localStorage.getItem("item")) || [];
  const newtask = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3000/";
  };
  return (
    <div className="taskshowcontainer">
      <button onClick={newtask}>New</button>

      {gettashshow.map((item, index) => {
        const { id, inputdata, newtxtarea, fileimg } = item;
        return (
          <>
            <List
              listindex={id}
              title={inputdata}
              contents={newtxtarea}
              fileimg={fileimg}
            />
          </>
        );
      })}
    </div>
  );
}
