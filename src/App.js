import React from "react";
import "./App.css";
import Newtask from "./components/Newtask";
// import Taskshow from "./components/Taskshow";
import Taskshows from "./components/Taskshows";
// import Userscontent from "./components/Usercontent";
import Usercontent from "./components/Usercontent";

import { BrowserRouter as Router, Routes, Route ,useParams ,Link} from "react-router-dom";





  
function App() {
  return (
    <>

    <Router>
        <Routes>
           <Route exact path="/" element = {<Newtask />} />
           <Route path="/pagination" element = {<Taskshows />} /> 
           {/* <Route path="/pagination/:userId" element={<Usercontent />} /> */}
           <Route path="/pagination/:idx" element={<Usercontent />} />
           
           {/* <Route path="/pagination/" element = {<Taskshows />} />  */}
                   
        </Routes>
      </Router>
      

      {/* <Newtask />
      <Taskshows /> */}
    </>
  );
}

export default App;
