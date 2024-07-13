import { useContext } from "react"
import { AuthContext } from "../login/context/AuthContext"
import { Navigate } from 'react-router-dom'



export const PublicRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)

    return (logged)
        ? <Navigate to='/permisos' />
        : children

}
