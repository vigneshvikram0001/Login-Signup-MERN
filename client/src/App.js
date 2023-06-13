import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import Home from "./Components/Home";
import SIgnup from "./Components/SIgnup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<Login/>}/>
        <Route path="/contact" element={<SIgnup/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SIgnup/>}/>
      </Routes>
    </div>
  );
}

export default App;
