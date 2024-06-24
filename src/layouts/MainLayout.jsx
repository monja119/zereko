import React, { useState, useEffect, createContext } from 'react'

// Router
import {Outlet, useNavigate} from 'react-router-dom'

// components
import Sidebar from "../components/Sidebar/Sidebar"
import Navbar from "../components/Navbar"

// Routes
import NavLink from '../routes/NavLink'
import {useSelector} from "react-redux";

// Sidebar expand context
export const SidebarExpandContext = createContext()

const MainLayout = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user)
    const [expanded, setExpanded] = useState(false)

    useEffect(() => {
        if(!user.isLoggedIn) {
            navigate('/login')
        }
        console.log(user)
    }, []);

    return (
        <>
            
            <SidebarExpandContext.Provider value={{expanded, setExpanded}}>
                {/* NAVIGATION */}
                <Sidebar>
                    <NavLink/>
                </Sidebar>


                <div className={`w-full h-full grow-0 shrink fixed top-0 left-0 flex flex-col items-center justify-center ${expanded ? "md:pl-80" : "md:pl-24"} md:p-6 transition-all`}>
                    <Navbar/>
                    <div className="w-full h-full bg-base-300 p-12 rounded-lg shadow-lg overflow-y-scroll relative"><Outlet/></div>
                </div>
            </SidebarExpandContext.Provider>
        </>
    )
}

export default MainLayout