import React, { useState } from 'react';
import { createPortal } from "react-dom";

import { createProject } from "../services/projectServices";

// icons
import { SlSocialGithub } from "react-icons/sl";
import { GoProject, GoLink } from "react-icons/go";

// components
import AddProjectCardItem from "./AddProjectCardItem";
import { useData } from "../contexts/DataContext";

const AddProjectModal = ({projects, setProjects}) => {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const { user } = useData();

  const handleAddProject = () => {
    // Add the new project to the list
    const newProjectList = [
      ...projects,
      { projectName, projectLink, githubLink, projectDescription }
    ];

    setProjects(newProjectList);
    // Reset input fields after adding project
    setProjectName('');
    setProjectLink('');
    setGithubLink('');
    setProjectDescription('');
  };

  const handleDeleteProject = (index) => {
    // Remove the project at the specified index
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };


  const handleSaveProjects = async () => {
    // Save the projects to the database
    await createProject(projects);
    // Reset the projects list
    setProjects([]);
  }
  

  const saveProjects = async () => {
    await projects.forEach(projet => {
      if(projet.projectName === "" || projet.projectLink === "" || projet.githubLink === "" || projet.projectDescription === ""){
        alert("Veuillez remplir tous les champs");
        return;
      }
      
      const data = {
        name: projet.projectName,
        url: projet.projectLink,
        github: projet.githubLink,
        description: projet.projectDescription,
        user_id: user.id
      };
      
      createProject(data);
    });

    // await 5 s
    setTimeout(() => {
      window.location.reload();
    }, 5000);
    
  }

  return createPortal(
    <dialog id="AddProjectModal" className="modal m-0 h-full absolute top-0 left-0">
      {/* Modal content */}
      <div className="modal-box p-12 min-w-[500px]">
        {/* Project addition form */}
        <div className="flex flex-col mb-6">
          {/* Form inputs for project details */}
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <GoProject />
            <input
              type="text"
              className="grow"
              placeholder="Nom du projet"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-3">
            <GoLink />
            <input
              type="text"
              className="grow"
              placeholder="Lien du projet"
              value={projectLink}
              onChange={(e) => setProjectLink(e.target.value)}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 mb-3">
            <SlSocialGithub />
            <input
              type="text"
              className="grow"
              placeholder="Lien Github du projet"
              value={githubLink}
              onChange={(e) => setGithubLink(e.target.value)}
            />
          </label>

          <textarea
            className="textarea textarea-bordered resize-none mb-3"
            placeholder="Description du projet"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
          ></textarea>

          {/* Button to add project */}
          <button onClick={handleAddProject} className="bg-main text-secondary py-2 px-4 rounded-md shadow hover:opacity-70 transition-all">
            Ajouter un projet
          </button>
        </div>

        {/* Display added projects */}
        <div className="flex flex-col">
          <h1 className="font-bold text-xl text-black mb-6">Projet(s) ajouté(s)</h1>
          <div className="flex w-full p-4 shrink-0 gap-3 bg-main rounded-box overflow-x-scroll">
            {projects.length === 0 ? (
              <div className="w-full bg-white min-h-[200px] rounded-box flex items-center justify-center" style={{background:"#fff"}}>0 projet ajouté</div>
            ) : (
              /* Render AddProjectCardItem for each project */
              projects.map((project, index) => (
                <AddProjectCardItem
                  key={index}
                  projectName={project.projectName}
                  projectLink={project.projectLink}
                  githubLink={project.githubLink}
                  onDelete={() => handleDeleteProject(index)}
                >
                  {project.projectDescription}
                </AddProjectCardItem>
              ))
            )}
          </div>
        </div>

        {/* Modal action */}
        <div className="modal-action">
          {/* Button to save projects */}
          <button onClick={saveProjects} className="bg-success text-white py-2 px-4 rounded-md shadow hover:opacity-70 transition-all">
            Enregistrer les projets
          </button>

          <form method="dialog">
            {/* Button to close modal */}
            <button className="bg-main text-secondary py-2 px-4 rounded-md shadow hover:opacity-70 transition-all">Annuler</button>
          </form>
        </div>
      </div>
    </dialog>,
    document.body
  );
};

export default AddProjectModal;