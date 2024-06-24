import React, {useState} from 'react'

// data
import {ForumColor} from "../data/ForumColor"

// components
import ForumCard from '../components/ForumCard'

// pages
import CreateTopic from './CreateTopic'

// icon
import { BiComment } from "react-icons/bi"
import { FaRegStar } from "react-icons/fa"


const Forum = () => {

    const [allCommentsFilter, setAllCommentsFilter] = useState(true)
    const [followingCommentsFilter, setFollowingCommentsFilter] = useState(false)
    
    // for the create topic
    const [showCreateTopic, setShowCreateTopic] = useState(false)

    const onChangeFilterAllCommentsFilter = () => {
        if(!allCommentsFilter) {
            setAllCommentsFilter(true)
            setFollowingCommentsFilter(false)
        }
    }

    const onChangeFilterFollowingCommentsFilter = () => {
        if(!followingCommentsFilter) {
            setFollowingCommentsFilter(true)
            setAllCommentsFilter(false)
        }
    }


    return (
        <>
            <div className={`w-full h-full flex relative ${showCreateTopic ? "-left-full opacity-0": "left-0 opacity-100 delay-200"} transition-all duration-500 ease-linear`}>
                <div className="md:w-3/4 w-full flex flex-col">
                    <select className="select focus:outline-none focus:border-none w-full max-w-xs">
                        <option selected>Les plus récents</option>
                        <option>Les plus pertinents</option>
                    </select>

                    <div className="w-full mt-6 px-3 flex flex-col gap-6 overflow-y-scroll overflow-x-hidden scroll">
                       
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        <ForumCard username="Miantsa Fanirina Rakotondrafara" createdAt="01 octobre 2004" commentNumber={5}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ipsam illum maxime qui aspernatur in quia nemo. Iusto architecto sit laudantium corrupti hic similique nobis expedita provident et. Praesentium soluta quasi pariatur blanditiis, harum suscipit? Illo minus, placeat reiciendis quam fugit pariatur aspernatur excepturi natus fugiat, magni rem consequuntur nam.
                        </ForumCard>
                        
                    </div>
                </div>
                <div className="md:w-1/4 w-full md:flex hidden flex-col pl-12">  
                    <button  onClick={() => setShowCreateTopic(curr => !curr)} className="btn btn-primary text-boldt text-lg mb-6">
                        Start new topic
                    </button>

                    <div className="w-full">
                        <div className="form-control w-full mb-2">
                            <label className="cursor-pointer label flex items-center">
                                <span className={"label-text text-lg font-bold flex items-center" + (allCommentsFilter ? " text-primary" : "")}><BiComment className="mr-6 text-lg"/> Toutes les discussions</span>
                                <input type="checkbox" className="checkbox checkbox-primary" checked={allCommentsFilter} onChange={onChangeFilterAllCommentsFilter}/>
                            </label>
                        </div>
                        <div className="form-control w-full">
                            <label className="cursor-pointer label flex items-center">
                                <span className={"label-text text-lg font-bold flex items-center" + (followingCommentsFilter ? " text-primary" : "")}><FaRegStar className="mr-6 text-lg" /> Discussion des personnes suivies</span>
                                <input type="checkbox" className="checkbox checkbox-primary" checked={followingCommentsFilter} onChange={onChangeFilterFollowingCommentsFilter}/>
                            </label>
                        </div>
                    </div>

                    <div className="w-full h-[1px] bg-base-100 my-6"></div>

                    <div className="w-full flex flex-col gap-6">
                        <div className="w-full flex items-center font-bold uppercase text-md">
                            <span className={"w-[10px] h-[10px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.faq + " ring" + ForumColor.faq }></span>
                            faq
                        </div>

                        <div className="w-full flex items-center font-bold uppercase text-md">
                            <span className={"w-[10px] h-[10px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.feedback + " ring" + ForumColor.feedback}></span>
                            feedback
                        </div>

                        <div className="w-full flex items-center font-bold uppercase text-md">
                            <span className={"w-[10px] h-[10px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.announcement + " ring" + ForumColor.announcement }></span>
                            Announcement
                        </div>

                        <div className="w-full flex items-center font-bold uppercase text-md">
                            <span className={"w-[10px] h-[10px] mr-6 rounded-full  ring-2 ring-offset-2 bg" + ForumColor.offTopic + " ring" + ForumColor.offTopic}></span>
                            Off topic
                        </div>
                    </div>

                </div>
            </div>
            <CreateTopic showCreateTopic={showCreateTopic} setShowCreateTopic={setShowCreateTopic}/>
        </>
    )
}

export default Forum