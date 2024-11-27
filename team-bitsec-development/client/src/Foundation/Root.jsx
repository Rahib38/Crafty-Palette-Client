import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './Headers'
import Footer from './Footer'

const Root = () => {
    const scrollToTop = ()=> {
        window.scrollTo(0,0)
    }
    return (
        <div>
            <div className='max-w-screen-lg'>
            <Headers />
            <Outlet />
            </div>
            <Footer scrollToTop={scrollToTop} />
        </div>
    )
}

export default Root