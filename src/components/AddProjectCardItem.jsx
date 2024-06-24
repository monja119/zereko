import React from 'react'

// icons
import { SlSocialGithub } from "react-icons/sl"
import { GoProject, GoLink } from "react-icons/go"
import { IoDocumentTextOutline } from "react-icons/io5"

const AddProjectCardItem = ({projectName, projectLink, githubLink, children, onDelete}) => {
  // Function to truncate text to a certain word count
  const truncateText = (text, count) => {
    const words = text.split(' ');
    if (words.length > count) {
      return words.slice(0, count).join(' ') + ' (...)';
    }
    return text;
  };

  // Truncate children to 50 words
  const truncatedChildren = truncateText(children, 20);

  return (
    <div className="flex justify-between items-center p-6 rounded-xl shadow-xl min-w-[300px]" style={{background:'#fff'}}>
      <div className="flex flex-col w-full">
        <div className="flex flex-col mb-3">
          <span className="font-bold text-sm w-1/2 flex items-center gap-2"><GoProject />Nom du projet: </span> 
          <p>{projectName}</p>
        </div>

        <div className="flex flex-col mb-3">
          <span className="font-bold text-sm w-1/2 flex items-center gap-2"><GoLink />Lien du projet: </span> 
          <a href={projectLink} className="w-1/2 underline text-secondary">{projectLink}</a>
        </div>

        <div className="flex flex-col mb-3">
          <span className="font-bold text-sm w-1/2 flex items-center gap-2"><SlSocialGithub />Lien Github du projet: </span> 
          <a href={githubLink} className="w-1/2 underline text-secondary">{githubLink}</a>
        </div>

        <div className="flex flex-col mb-3">
          <span className="font-bold text-sm w-1/2 flex items-center gap-2"><IoDocumentTextOutline  />Description du projet: </span> 
          <p>{truncatedChildren}</p>
        </div>
      </div>
      <button className="btn btn-square btn-sm justify-self-end self-start ml-12" onClick={onDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
}

export default AddProjectCardItem;
