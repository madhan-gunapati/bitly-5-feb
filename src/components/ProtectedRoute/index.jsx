import { Outlet, Route, Routes } from "react-router-dom"

const ProtectedRoute = ()=>{
    return (22? <Outlet />:<p>Sample</p>)
}
export default ProtectedRoute