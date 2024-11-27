import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'

const bitContextProvider = createContext()


// Context Hooks 
export const useBitContext = () => {
    return useContext(bitContextProvider)
}

// context Api
const BitContext = ({ children }) => {
    const [token, setToken] = useState()
    const [user, setUser] = useState()
    const fetchingURL = 'http://localhost:3000' // the backend url


    // Create an Axios instance
    const api = axios.create({
        baseURL: fetchingURL,  // Backend URL
    });

    api.interceptors.request.use(
        (config) => {
            const token = localStorage.getItem('token');  // Assuming the token is stored in localStorage
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;  // Attach Bearer token to Authorization header
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    useEffect(() => {
        checkLoginStatus()
    }, [])


    // check user is logged in or not 
    const checkLoginStatus = async () => {
        try {
            const response = await api.get(`/users/dashboard`);
            // console.log(response.data)
            if (response.data?.success) {
                setToken(true)
                setUser(response.data?.data)
            } else {
                setToken(false)
            }
            // console.log('User is logged in:', response.data);
        } catch (error) {
            console.log(error)
            if (error.response) {
                console.log('User is not logged in:', error?.response?.data?.error);
            }
        }
    };

    // Everything you can pass data into context through content
    const content = { token, setToken, api,user, setUser }
    return (
        <bitContextProvider.Provider value={content}>
            {children}
        </bitContextProvider.Provider>
    )
}

export default BitContext