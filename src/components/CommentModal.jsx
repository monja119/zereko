import React from 'react'
import {createPortal} from 'react-dom'

// Components
import CommentBubble from './CommentBubble'

// icon
import { IoSendSharp } from "react-icons/io5"

const CommentModal = () => {
  return createPortal(
    <dialog id="CommentModal" className="modal h-full absolute top-0 left-0">
        <div className="modal-box md:min-w-[720px] w-screen md:h-auto h-full p-12">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            
            <h3 className="font-bold text-2xl mb-12">Hello!</h3>
            
            <div className="flex flex-col gap-3 mb-12 max-h-[400px] overflow-y-scroll">
                
                {/* Tous les commentaires */}
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>
                <CommentBubble/>

            </div>
            
            <div className="flex">
                <textarea className="textarea textarea-bordered w-full resize-none text-lg" placeholder="Ecrivez un commentaire"></textarea>
                <IoSendSharp className="text-secondary text-4xl ml-6 self-end"/>
            </div>

            

        </div>
    </dialog>
  , document.body)
}

export default CommentModal