import React, {useState} from 'react'

// icons
import { IoIosArrowBack } from "react-icons/io"
import { MdOutlinePublic, MdOutlinePublicOff, MdOutlineFeedback, MdRestartAlt  } from "react-icons/md"
import { FaRegQuestionCircle  } from "react-icons/fa"
import { LuMessageSquarePlus } from "react-icons/lu"

const CreateTopic = ({showCreateTopic, setShowCreateTopic}) => {
  const [topic, setTopic] = useState({
    type: "faq",
    subject: "",
    privacy: "public"
  })

  return (
    <div className={`w-full h-full relative ${showCreateTopic ? "left-0 opacity-100 delay-200" : "left-full opacity-0"} -top-full transition-all duration-500 ease-linear relative`}>
      <button className="bg-base-100 hover:bg-base-200 transition-all p-1 w-12 h-12 rounded-full flex items-center justify-center absolute -top-16 -left-8" onClick={() => setShowCreateTopic(curr => !curr)}><IoIosArrowBack className="text-3xl"/></button>
      <div className="w-1/2 h-full flex-col flex mt-10 px-12">
        <h1 className="text-4xl mb-6">Create a new topic</h1>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">What is the topic?</span>
          </div>
          <textarea className="textarea textarea-bordered h-72 resize-none scroll" placeholder="Create discussion here ..." value={topic.subject} onChange={e => setTopic({...topic, subject: e.target.value})}></textarea>
          
          {/* ERROR */}
          <div role="alert" className="alert border-red-500/50 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>Please write something!</span>
          </div>


        </label>
        <label className="form-control w-full mt-6">
        
          <div className="label">
              <span className="label-text">What type of topic it is?</span>
          </div>
          <div className="flex gap-3 wrap">
            
            <button className={`btn ${topic.type === "faq" ? " btn-primary" : "btn-neutral"} tracking-widest`} onClick={() => setTopic({...topic, type: "faq"})}><FaRegQuestionCircle className="text-xl"/>FAQ</button>
            <button className={`btn ${topic.type === "feedback" ? "btn-primary" : "btn-neutral"} tracking-widest`} onClick={() => setTopic({...topic, type: "feedback"})}><MdRestartAlt className="text-xl"/>Feedback</button>
            <button className={`btn ${topic.type === "announcement" ? "btn-primary" : "btn-neutral"} tracking-widest`} onClick={() => setTopic({...topic, type: "announcement"})}><MdOutlineFeedback className="text-xl"/>Annoucement</button>
            <button className={`btn ${topic.type === "offTopic" ? "btn-primary" : "btn-neutral"} tracking-widest`} onClick={() => setTopic({...topic, type: "offTopic"})}><LuMessageSquarePlus className="text-xl"/>Off topic</button>

          </div>
        </label>
        <label className="form-control w-full mt-6">

          <div className="label">
              <span className="label-text">Privacy</span>
          </div>
          <div className="flex gap-3 wrap">
        
            <button className={`btn ${topic.privacy === "public" ? " btn-primary" : "btn-neutral"} tracking-widest`} onClick={() => setTopic({...topic, privacy: "public"})}><MdOutlinePublic className="text-xl"/>Public</button>
            <button className={`btn ${topic.privacy === "private" ? "btn-primary" : "btn-neutral"} tracking-widest`} onClick={() => setTopic({...topic, privacy: "private"})}><MdOutlinePublicOff className="text-xl"/>Private</button>
          </div>
        </label>
        <button className="btn btn-primary w-full mt-12 font-bold text-lg">Publish topic</button>
      </div>

    </div>
  )
}

export default CreateTopic