import React, { useEffect, useState} from 'react'
import {createPortal} from "react-dom"
import { createForums } from '../services/forumService'


const defaultState = {
  type: 'FAQ',
  title: '',
  description: '',
  user_id : null
}

const AddTopicModal = () => {
  const [user, setUser] = useState({})
  const [state, setState] = useState(defaultState)

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const save = async () => {
    // Set the user_id
    state.user_id = user.id
    // require all fields
    if (!state.title || !state.description) return alert('Tous les champs sont requis')
    
    // Create the forum
    createForums(state)

    // Reset the state
    setState(defaultState)
    // setTimeout(() => {
    //   window.location.reload()
    // }, 5000)
    
  }
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('webcup_user')))
  }, [])
  

    return createPortal(
      <dialog id="AddTopicModal" className="modal m-0 h-full absolute top-0 left-0">
        {/* Modal content */}
        <div className="modal-box p-12 min-w-[500px]">

          <h3 className="font-bold text-2xl mb-12">Ajouter une nouvelle discussion</h3>
          {/* Topic addition form */}
          <div className="flex flex-col mb-6 gap-6">
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-bold">Type de discussion</span>
                </div>
                <select 
                  name="type"
                  onChange={handleChange}
                  className="select select-bordered w-full max-w-xs">
                    <option selected>FAQ</option>
                    <option>Feedback</option>
                    <option>Annoncement</option>
                    <option>Sans topique</option>
                </select>
            </label>
            

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-bold">Topique de discussion</span>
                </div>
                <input 
                  name="title"
                  onChange={handleChange}
                  type="text" placeholder="Un sujet super" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text text-lg font-bold">Description</span>
                </div>
                <textarea 
                  name="description"
                  onChange={handleChange}
                className="textarea textarea-bordered resize-none text-lg" placeholder="Suis-je un très bon developpeur ?"></textarea>
            </label>

          </div>
  
  
          {/* Modal action */}
          <div className="modal-action">
            <button 
                onClick={() => { save()}}
              className="bg-main text-secondary py-4 px-4 rounded-md shadow hover:opacity-70 transition-all">
                Ajouter une discussion
                </button>
            
            <form method="dialog">
              {/* Button to close modal */}
              <button className="btn btn-outline ml-6">Annuler</button>
            </form>
          </div>
        </div>
      </dialog>,
      document.body
    );
};

export default AddTopicModal