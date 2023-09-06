import React from "react";
import "./App.css";
import Newtask from "./components/Newtask";
import Taskshows from "./components/Taskshows";
import Usercontent from "./components/Usercontent";
import { BrowserRouter as Router, Routes, Route ,useParams ,Link} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
        <Routes>
           <Route  path="/" element = {<Newtask />} />
           <Route exact path="/pagination" element = {<Taskshows />} /> 
           <Route path="/pagination/:idx" element={<Usercontent />} />                   
        </Routes>
      </Router>
    </>
  );
}

export default App;
