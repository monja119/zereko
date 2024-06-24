import React, { useState, useContext, useEffect } from 'react'

// Router
import { Link, useLocation } from 'react-router-dom'

// navbar expand context
import { SidebarExpandContext } from '../../layouts/MainLayout'


const SidebarItem = ({icon, text, alert, link}) => {
  const [active, setActive] = useState(false)
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    if (pathname.includes(link)) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [pathname, link])

  const {expanded} = useContext(SidebarExpandContext)
  return (
    <Link to={link} className={`
      group relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer
      transition-colors
      ${active ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}
    `}>
        {icon}
        <span className={`text-lg overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
        {alert && <div className={`absolute right-2 w-2 h-2 rounded-full transition-all group-hover:bg-secondary ${active ? "bg-secondary" : "bg-primary"} ${expanded ? "" : "top-2"}`}></div>}
    </Link>
  )
}

export default SidebarItem