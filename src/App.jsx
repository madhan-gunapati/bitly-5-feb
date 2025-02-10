import { useState } from "react"
import Home from "./components/Home";
import UrlSubmission from "./components/UrlSubmission";
import { Route, Routes } from "react-router-dom";

const App = ()=>{
  
 
  return <div>
     <h1>Bitly URL Shortner</h1>
     <Routes>
    <Route path="/home" Component={Home  } />
    <Route path="/form" Component={UrlSubmission } />
    </Routes>
   
    
  </div>
}

export default App