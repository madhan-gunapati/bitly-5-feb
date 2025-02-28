import { useSelector } from "react-redux"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"

const ProtectedRoute = ()=>{
    const {jwt_token} = useSelector((state)=>state.LoginSlice)
    
    
    
    return ( (jwt_token!== null && jwt_token.length>0) ? <Outlet />:<Navigate to='/login' />)
}
export default ProtectedRoute