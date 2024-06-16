import { useState } from "react";
import "./App.css";
import AboutUs from "./Component/AboutUs";
import NavBar from "./Component/NavBar";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";
import React from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleDarkMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "Success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "#1f2023";
      showAlert("Dark mode is enabled!", "Success");
    }
  }
  // const toggleBlueMode = ()=>{
  //   if(mode==="light"){
  //     setMode("dark");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode is enabled!", "Success");
  //   }
  //   else{
  //     setMode("light");
  //     document.body.style.backgroundColor = "#051c33";
  //     showAlert("Dark Blue mode is enabled!", "Success");
  //   }
  // }

  return (
    <>
      <NavBar title="TextUtils" about="About Us" mode={mode} toggleDarkMode={toggleDarkMode} /*toggleBlueMode={toggleBlueMode}*//>
      <Alert alert={alert}/>
    
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<TextForm mode={mode} showAlert={showAlert}/>}/>
          <Route path='/about' element={<AboutUs mode={mode} showAlert={showAlert}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
