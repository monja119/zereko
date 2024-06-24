import React, { useEffect, useState} from 'react'

// Router
import { NavLink, Outlet} from 'react-router-dom'

// icons
import { BsTelephone } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { GiMale } from "react-icons/gi"
import { FaBriefcase } from "react-icons/fa"
import { AiFillMessage } from "react-icons/ai"
import { MdLocationOn } from "react-icons/md"

import {useSelector} from "react-redux";

const Profile = () => {
    const user = useSelector(state => state.user.user.user)

  return (
    <div className="w-full h-full">
        <div className="w-full h-full rounded-md shadow-xl p-12 flex flex-row">
            
            {/* TOP SECTION */}
            <div className="flex flex-col p-3 h-full w-1/4 rounded">

                <div className="avatar flex flex-row justify-center w-full mb-5">
                        <img src="/assets/images/monja.png" style={{width: '150px'}} className={"rounded-full"}/>
                </div>

                <div className="flex flex-col items-center w-full mb-10">
                    <h1 className="font-bold text-2xl mb-1 text-center"> {user?.name} </h1>
                    {/*<h3 className="text-lg text-white">*/}
                    {/*    Web Developer*/}
                    {/*</h3>*/}
                </div>

                <div className="flex flex-col justify-center gap-1 text-white">

                    {/*<div className="flex flex-items-center gap-3 mb-2">*/}
                    {/*    <BsTelephone className="text-xl text-primary "/>*/}
                    {/*    <span>*/}
                    {/*         +261 34 12 345 67*/}
                    {/*    </span>*/}
                    {/*</div>*/}

                    <div className="flex items-center gap-3 mb-2">
                        <CiMail className="text-xl text-primary"/>
                        <span>
                            {user?.email}
                        </span>
                    </div>
                    <div  className="flex items-center gap-3 mb-2">
                        <MdLocationOn className="text-xl text-primary"/>
                        <span>
                            Antananarivo, Madagascar
                        </span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                        <GiMale className="text-xl text-primary"/>
                        <h4 className="font-bold">Home</h4>
                    </div>
                </div>


                <div className="flex flex-col justify-center  gap-1">
                    <div className="flex items-center gap-3 w-full">
                        <NavLink to={"/profile/update"}
                                 className="bg-primary text-white py-2 px-4 rounded-md shadow hover:opacity-70 transition-all w-full h-[40px] flex justify-center items-center font-bold">
                            Mettre à jour
                        </NavLink>
                    </div>
                    <div className="flex items-center gap-3">
                        <NavLink to={"/logout"}
                                 className="bg-red-600 text-white py-2 px-4 rounded-md shadow hover:opacity-70 transition-all w-full h-[40px] flex justify-center items-center font-bold">
                            Déconnexion
                        </NavLink>
                    </div>
                </div>

            </div>
            {/* END TOP SECTION */}

            <div className='h-3/4 w-full'>
                <div className='w-full h-[1px] bg-primary my-6'></div>
                <nav className='flex gap-4 text-white'>
                    <NavLink className="ProfileNavLink hover-scale" to="/profile/history">Historiques</NavLink>
                    <NavLink className="ProfileNavLink hover-scale" to="/profile/agenda">Agenda</NavLink>
                    <NavLink className="ProfileNavLink hover-scale" to="/profile/feedback">feedback</NavLink>
                    <NavLink className="ProfileNavLink hover-scale" to="/profile/update">Mettre à jours</NavLink>
                </nav>

                <div className='w-full h-[1px] bg-primary my-6'></div>
                <Outlet/>
            </div>

        </div>


    </div>
  )
}

export default Profile          