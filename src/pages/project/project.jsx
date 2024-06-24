import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import person from "/assets/images/personne1.jpg";
import { Tooltip } from 'bootstrap';
import DialogConfirmedDelete from '../../components/DialogeDeleteConfirmed';

import { listProject, deleteProject } from "../../services/projectServices.js";
import { useSelector } from "react-redux";
import Nothing from "../../components/Nothing.jsx";

import { FaPlus, FaEye, FaEdit, FaTrash} from "react-icons/fa";


export default function Project() {
    const user = useSelector(state => state.user.user.user);
    const [projects, setProjects] = useState([]);
    const [showTaskDialogDelete, setShowTaskDialogDelete] = useState(false);


    const handleCloseTaskDialogDelete = () => setShowTaskDialogDelete(false);
    const handleShowTaskDialogDelete = () => setShowTaskDialogDelete(true);
    const deletingProject = (id, title) => {
        if(confirm("etes vous sure de vouloir supprimer le projet '" + title+"'")){
            deleteProject(id)
                .then((res) => {
                    console.log(res.data);
                    listProject()
                        .then((res) => {
                            window.location.reload();
                        })
                        .catch((err) => {
                            console.log("error : " + err);
                        })
                })
                .catch((err) => {
                    console.log("error : " + err);
                })
        }
    }
    
    useEffect(() => {
        // Initialisation des tooltips Bootstrap
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl);
        });
    }, []);

    useEffect(() => {
        listProject()
            .then((res) => {
                setProjects(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log("error : " + err);
            })
    }, []);

    return (
        <>
        {
            projects.length === 0  ? <Nothing /> :
                (
                    <div className="content-wrapper">
                        <section className="content">
                            <div className="card-header flex flex-row justify-end">
                                <h3 className="card-title">Projects</h3>
                                <div className="card-tools">
                                    <Link to="/projects/add" className="btn btn-primary custom-button ml-5">
                                        <FaPlus className="mr-2"/>
                                        Créer
                                    </Link>
                                </div>
                            </div>

                            {
                                projects.map((project, index) => (
                                    <div className="card cursor-pointer hover:bg-base-100" key={index}>
                                        <div className="card-body p-0">
                                            <table className="table table-striped projects">
                                                <tbody>
                                                <tr className={"flex flex-row justify-between"}>
                                                    <td>
                                                        <Link to="#">
                                                            {project.title}
                                                        </Link>
                                                        <br/>
                                                        <small>
                                                            {project.created_date}
                                                        </small>
                                                    </td>
                                                    <td>
                                                        <ul className="list-inline" style={{display: 'flex'}}>
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" style={{width: '30px'}}
                                                                     className={"rounded-full"} src={person}
                                                                     data-toggle="tooltip"
                                                                     title="Nom de la personne 1"/>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" style={{width: '30px'}}
                                                                     className={"rounded-full"} src={person}
                                                                     data-toggle="tooltip"
                                                                     title="Nom de la personne 2"/>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" style={{width: '30px'}}
                                                                     className={"rounded-full"} src={person}
                                                                     data-toggle="tooltip"
                                                                     title="Nom de la personne 3"/>
                                                            </li>
                                                            <li className="list-inline-item">
                                                                <img alt="Avatar" style={{width: '30px'}}
                                                                     className={"rounded-full"} src={person}
                                                                     data-toggle="tooltip"
                                                                     title="Nom de la personne 4"/>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                    <td className="project_progress">
                                                        <div className="progress progress-sm">
                                                            <div className="progress-bar bg-green" role="progressbar"
                                                                 aria-valuenow="57" aria-valuemin="0"
                                                                 aria-valuemax="100"
                                                                 style={{width: "57%"}}>
                                                            </div>
                                                        </div>
                                                        <small>
                                                            57% Complete
                                                        </small>
                                                    </td>
                                                    <td className="project-state text-center">
                                                        <span className="badge badge-success">Success</span>
                                                    </td>
                                                    <td className="project-actions text-right flex flex-row justify-end">
                                                        <Link
                                                            className="btn btn-primary btn-sm m-2" to="/projects/view">
                                                            <FaEye className="mr-2"/>
                                                            Voir
                                                        </Link>
                                                        <Link className="btn btn-info btn-sm m-2" to="/projects/edit">
                                                            <FaEdit className="mr-2"/>
                                                             Modifier
                                                        </Link>
                                                        <button className="btn btn-danger btn-sm m-2"
                                                                onClick={() => deletingProject(project.id, project.title)}
                                                        >
                                                            <FaTrash className="mr-2"/>
                                                            Supprimer
                                                        </button>
                                                        <Link className="btn btn-secondary btn-sm m-2" to="/projects/inviter">
                                                            <i className="fas fa-trash"></i>
                                                            Inviter des amies
                                                        </Link>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))
                            }

                        </section>
                        <DialogConfirmedDelete show={showTaskDialogDelete} handleClose={handleCloseTaskDialogDelete}
                                               description="Are you sure you want to delete this project?"/>
                    </div>
                )
        }
        </>
    );
}
