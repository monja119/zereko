import React, {useContext} from 'react'

import { Link } from 'react-router-dom'
// icons
import { IoSearch } from "react-icons/io5"
import { IoMdNotificationsOutline } from "react-icons/io"
import { FiMessageCircle } from "react-icons/fi"

// sidebar expand context
import { SidebarExpandContext } from '../layouts/MainLayout'

const Navbar = () => {
    const {expanded, setExpanded} = useContext(SidebarExpandContext)
    return (
        <div className={`navbar z-[1000] transition-all bg-base-300  md:rounded-lg md:shadow-md px-6 py-4 md:mb-6`}>
            <div className="flex-1">
                
                <IoSearch className="text-2xl"/>

                <div className="form-control ml-4">
                    <input type="text" placeholder="Search" className="input w-72 focus:outline-none focus:border-none text-primary" />
                </div>
                
            </div>
            <div className="flex-none gap-2">
                {/* NOTIFICATION */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-2">
                        <div className="indicator">
                            <IoMdNotificationsOutline className="text-3xl"/>
                            <span
                                style={{top: "5px", right: "5px"}}
                                className="badge badge-xs bg-red-600 indicator-item py-2"
                            >45
                            </span>
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-[400px] bg-accent">
                        <li>
                            <a className="justify-between my-1 p-1">
                                quelque chose
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>
                            <a className="justify-between my-1 p-1">
                                autre chose
                            </a>
                        </li>
                        <li>
                            <a className="justify-between my-1 p-1">
                                autre chose 2
                            </a>
                        </li>
                    </ul>
                </div>

                {/* PROFILE */}
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ml-2">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                        <Link to={"/profile"}
                                className="justify-between my-2"
                        >
                            Profile
                            <span className="badge">New</span>
                        </Link>
                        </li>
                        <li>
                            <Link to={"/settings"}
                                  className="justify-between my-2"
                            >
                                Paramètres
                            </Link>
                        </li>
                        <li>
                            <Link to={"/logout"}
                                  className={"btn btn-danger bg-primary text-white my-2"}
                            >
                                Se déconnecter
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar