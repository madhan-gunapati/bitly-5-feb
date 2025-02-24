import { useState } from "react"
import Home from "./components/Home";
import UrlSubmission from "./components/UrlSubmission";
import { Form, Route, Routes } from "react-router-dom";
import RedirectionComponent from "./components/RedirectionComponent";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = ()=>{
  
 
  return <div>
     <h1>Bitly URL Shortner</h1>
     <Routes>
      <Route  Component={ProtectedRoute} >
        <Route path='/home' Component={UrlSubmission} />
      </Route>
      <Route path="/login" Component={Login} />
    <Route path="/" Component={Home  } />
    
    <Route path="/:id" Component={RedirectionComponent} />
    </Routes>
   
    
  </div>
}

export default App