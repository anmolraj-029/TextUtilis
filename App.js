import "./App.css";
//import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React,{useState} from "react";

function App() {
   const[mode,setMode]=useState('light');

   const toggleMode=()=>{
    if(mode === 'light')
    {
     setMode('dark');
    //  document.body.style.backgroundColor="grey";
    }
     else{
      setMode('light');
     }
   }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} abouttext="AboutUs"/>
    <div className="container my-3">
     <Textform heading="Enter the text to analyse"/>
    </div>
    </>
  );
}

export default App;
