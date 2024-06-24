import React, { useState } from 'react';
import GeneralCard from './generalCard';
import { Link } from 'react-router-dom';

export default function ProjectAdd() {
    const [createProject, setCreateProject] = useState(0);

    return (
        <div className="content-wrapper p-4  w-full flex  flex-col justify-center items-center ">
            <div className="w-[500px]">
                <GeneralCard creating={createProject} />
            </div>
            <div className="flex items-center mt-4 ">
                <Link className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300 m-5 h-15 w-60 text-center" to="/projects">
                    Retour
                </Link>
                <button
                    onClick={() => setCreateProject(createProject + 1)}
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 text-center m-5  h-15 w-60"
                >
                    Créer
                </button>
            </div>
        </div>
    );
}
