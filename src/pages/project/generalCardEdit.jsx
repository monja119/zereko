import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProject } from "../../services/projectServices.js";
import { createMember } from "../../services/memberServices.js";


const defaultState = {
    id : null,
    title: "",
    description: "",
    date_debut: null,
    date_fin: null
}
export default function GeneralCardEdit({ creating, project }) {
    const [state, setState] = useState(defaultState);
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user.user);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.id]: e.target.value
        });
    }

    useEffect(() => {
        if(project) {
            setState({
                id: project?.id,
                title: project?.title,
                description: project?.description,
                date_debut: project?.date_debut,
                date_fin: project?.date_fin
            })
        }
    }, [project]);

    const updatingProject = async () => {
        // title is required
        if(state.title === "") {
            setError("Le titre est requis.");
            return;
        }

        updateProject(state)
            .then((res) => {
                const project = res.data;
               window.location.href = "/projects"
            })
            .catch(async (err) => {
                const error  = await err
                setError("Erreur : " + error.message)
            })

    }

    useEffect(() => {
        if(creating !== 0) updatingProject();
    }, [creating]);

    return (
        <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-700 p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">General</h3>
                <button type="button" className="text-gray-300 hover:text-gray-100 transition duration-300" title="Collapse">
                    <i className="fas fa-minus"></i>
                </button>
            </div>
            <div className="p-4">
                <span className="text-red-500 my-4">{error}</span>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-1">Nom du projet</label>
                    <input
                        onChange={handleChange}
                        value={state.title}
                        type="text" id="title" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">Description</label>
                    <textarea
                        onChange={handleChange}
                        value={state.description}
                        id="description" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" rows="4"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="date_debut" className="block mb-1">Date de début</label>
                    <input
                        onChange={handleChange}
                        value={state.date_debut}
                        type="date" id="date_debut" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="date_fin" className="block mb-1">Date de fin</label>
                    <input
                        onChange={handleChange}
                        value={state.date_fin}
                        type="date" id="date_fin" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
            </div>
        </div>
    );
}
