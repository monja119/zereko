import React, {useState, useContext} from 'react'

// icons
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa"

// sidebar expand context
import { SidebarExpandContext } from '../../layouts/MainLayout'


const Sidebar = ({children}) => {
  const {expanded, setExpanded} = useContext(SidebarExpandContext)
  return (
    <div 
    onMouseEnter={() => setExpanded(true)}
    onMouseLeave={() => setExpanded(false)} 
    className="h-screen z-[1000] fixed cursor-pointer md:block hidden">
        <div 
            className="h-full flex flex-col bg-base-300 shadow-sm w-fit">
            <ul className="flex-1 z-[1000] px-3 mt-6">{children}</ul>
        </div>
    </div>
  )
}

export default Sidebar