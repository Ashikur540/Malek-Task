import React from 'react'
import { Outlet } from 'react-router-dom'
import { Nav } from '../components/Nav/Nav'


const Main = () => {
    return (
        <div className='h-screen'>
            {/* <Navbar></Navbar> */}
            <Nav />
            <Outlet></Outlet>
        </div>
    )
}

export default Main
