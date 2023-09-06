import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route ,useParams ,Link} from "react-router-dom";
import Newtask from "./components/Newtask";
import Taskshows from "./components/Taskshows";
import Usercontent from "./components/Usercontent";

function App() {
  return (
    <>
    <Router>
        <Routes>
           <Route exact path="/" element = {<Newtask />} />
           <Route  path="/pagination" element = {<Taskshows />} /> 
           <Route path="/pagination/:idx" element={<Usercontent />} />                   
        </Routes>
      </Router>
    </>
  );
}

export default App;
