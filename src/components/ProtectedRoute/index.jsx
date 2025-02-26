import { useSelector } from "react-redux"
import { Navigate, Outlet, Route, Routes } from "react-router-dom"

const ProtectedRoute = ()=>{
    const {jwt_token} = useSelector((state)=>state.LoginSlice.jwt_token)
    
    
    return (jwt_token!=='' ? <Outlet />:<Navigate to='/login' />)
}
export default ProtectedRoute