import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import GeneralCardEdit from './generalCardEdit.jsx';
import { getProject } from "../../services/projectServices.js";
import { Link } from 'react-router-dom';

export default function ProjectEdit() {
    const [project, setProject] = useState(null);
    const [createProject, setCreateProject] = useState(0);
    // getting params (id) from the url
     const { id } = useParams();

     // getting the project by id
     useEffect(() => {
            getProject(id)
                .then((res) => {
                    setProject(res.data[0]);
                })
                .catch((err) => {
                    console.log(err);
                })
     }, [id]);

    return (
        <div className="content-wrapper p-4  w-full flex  flex-col justify-center items-center ">
            <div className="w-[500px]">
                <GeneralCardEdit creating={createProject} project={project} />
            </div>
            <div className="flex items-center mt-4 ">
                <Link className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 m-5 h-15 w-60 text-center" to="/projects">
                    Retour
                </Link>
                <button
                    onClick={() => setCreateProject(createProject + 1)}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 text-center m-5  h-15 w-60"
                >
                    Modifier
                </button>
            </div>
        </div>
    );
}
