import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import person from "/assets/images/personne1.jpg";
import { Tooltip } from 'bootstrap';
import DialogConfirmedDelete from '../../components/DialogeDeleteConfirmed';

export default function Project() {
    const [showTaskDialogDelete, setShowTaskDialogDelete] = useState(false);

    const handleCloseTaskDialogDelete = () => setShowTaskDialogDelete(false);
    const handleShowTaskDialogDelete = () => setShowTaskDialogDelete(true);

    useEffect(() => {
        // Initialisation des tooltips Bootstrap
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'));
        tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new Tooltip(tooltipTriggerEl);
        });
    }, []);

    return (
        <div className="content-wrapper">
            <section className="content">
                <div className="card">
                    <div className="card-header flex flex-row justify-end">
                        <h3 className="card-title">Projects</h3>
                        <div className="card-tools">
                            <Link to="/projects/add" className="btn btn-primary custom-button ml-5">
                                <i className="fa-solid fa-plus"></i> Créer
                            </Link>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <table className="table table-striped projects">
                            <thead>
                                <tr>
                                    <th className='w-40'>
                                        Nom du projet
                                    </th>
                                    <th className='w-40'>
                                        Membres
                                    </th>
                                    <th className='w-80'>
                                        Progression
                                    </th>
                                    <th className="w-60">
                                        Status
                                    </th>
                                    <th className="text-center w-60">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Link to="#">
                                            AdminLTE v3
                                        </Link>
                                        <br />
                                        <small>
                                            Created 01.01.2019
                                        </small>
                                    </td>
                                    <td>
                                        <ul className="list-inline" style={{display: 'flex'}} >
                                            <li className="list-inline-item">
                                                <img alt="Avatar" style={{width: '30px'}} className={"rounded-full"} src={person} data-toggle="tooltip" title="Nom de la personne 1" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" style={{width: '30px'}} className={"rounded-full"} src={person} data-toggle="tooltip" title="Nom de la personne 2" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" style={{width: '30px'}} className={"rounded-full"} src={person} data-toggle="tooltip" title="Nom de la personne 3" />
                                            </li>
                                            <li className="list-inline-item">
                                                <img alt="Avatar" style={{width: '30px'}} className={"rounded-full"} src={person} data-toggle="tooltip" title="Nom de la personne 4" />
                                            </li>
                                        </ul>
                                    </td>
                                    <td className="project_progress">
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-green" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{ width: "57%" }}>
                                            </div>
                                        </div>
                                        <small>
                                            57% Complete
                                        </small>
                                    </td>
                                    <td className="project-state">
                                        <span className="badge badge-success">Success</span>
                                    </td>
                                    <td className="project-actions text-right flex flex-row">
                                        <Link className="btn btn-primary btn-sm m-2" to="/viewProject" >
                                            <i className="fas fa-folder"></i> View
                                        </Link>
                                        <Link className="btn btn-info btn-sm m-2" to="/editProject" >
                                            <i className="fas fa-pencil-alt"></i> Edit
                                        </Link>
                                        <button className="btn btn-danger btn-sm m-2" to="#"  onClick={handleShowTaskDialogDelete}>
                                            <i className="fas fa-trash"></i> Delete
                                        </button>
                                        <button className="btn btn-secondary btn-sm m-2" to="#">
                                            <i className="fas fa-trash"></i> Inviter des amies
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <DialogConfirmedDelete show={showTaskDialogDelete} handleClose={handleCloseTaskDialogDelete} description="Are you sure you want to delete this project?" />
        </div>
    );
}
