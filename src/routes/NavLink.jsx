import React from 'react'

// icons
import { IoHomeOutline, IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5"
import { MdCalendarToday, MdOutlineForum } from "react-icons/md"

// profile outliner
import { FaUserCircle, FaProjectDiagram  } from "react-icons/fa"

// components
import SidebarItem from "../components/Sidebar/SidebarItem"

const NavLink = () => {
  return (
    <>
        <div className="flex items-center justify-center py-4">
            <img src="/assets/images/logo_no_bg.png" alt="logo" className="h-8"/>
        </div>
        <SidebarItem icon={<IoHomeOutline className="text-2xl"/>} text="Acceuil" link="/home"/>
        <SidebarItem icon={<FaUserCircle className="text-2xl"/>} text="Profile" link="/profile"/>
        {/* <SidebarItem icon={<FaProjectDiagram  className="text-2xl"/>} text="Projet" link="/projects"/> */}
        <SidebarItem icon={<IoNotificationsOutline className="text-2xl"/>} text="Notifications" link="/notifications" alert/>
        {/*<SidebarItem icon={<MdCalendarToday className="text-2xl"/>} text="Mon calendrier" link="/calendar"/>*/}
        {/*<SidebarItem icon={<MdOutlineForum className="text-2xl"/>} text="Nouveautés" link="/forum"/>*/}
        <SidebarItem icon={<IoSettingsOutline className="text-2xl"/>} text="Paramètres" link="/settings"/>
    </>
  )
}

export default NavLink