import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useBitContext } from '../context/BitContext'

const PrivateRoute = ({ children }) => {

    const navigate = useNavigate()
    const location = useLocation()
    const { token } = useBitContext()
    // console.log(location)

    useEffect(()=> {

        if (!token) {
            return navigate("/login", { state:{from: location.pathname }})
        }
        
    },[])
    
    return children
}

export default PrivateRoute