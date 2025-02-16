import { useState } from "react"
import Home from "./components/Home";
import UrlSubmission from "./components/UrlSubmission";
import { Route, Routes } from "react-router-dom";
import RedirectionComponent from "./components/RedirectionComponent";

const App = ()=>{
  
 
  return <div>
     <h1>Bitly URL Shortner</h1>
     <Routes>
    <Route path="/" Component={Home  } />
    <Route path="/form" Component={UrlSubmission } />
    <Route path="/:id" Component={RedirectionComponent} />
    </Routes>
   
    
  </div>
}

export default App