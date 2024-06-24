import { Link } from 'react-router-dom';
import photo from '/assets/images/personne1.jpg';
import InfoBox from '../../components/InfoBox';

const InfoProjectView = () => {
    // Exemple de données de détails de projet
    const projectDetails = {
        title: 'Sample Project',
        description: 'This is a sample project description.',
        status: 'In Progress',
        clientCompany: 'Sample Company Inc.',
        projectLeader: 'John Doe',
        estimatedBudget: 5000,
        spentBudget: 2500,
        estimatedDuration: 6,
    };

    return (
        <div>
            {/* Contenu principal */}
            <section className="content ">
                <div className="container mx-auto p-4 ">
                    <div className="flex flex-col">
                        {/* Colonne pour le contenu principal */}
                        <div className="flex flex-col ">
                            <div className="bg-gray-800 shadow rounded-lg">
                                <div className="px-6 py-4 border-b flex justify-between items-center bg-blue-700 rounded-lg">
                                    <h3 className="text-lg font-semibold ">{projectDetails.title} details</h3>
                                    <div className="space-x-2">
                                        <button type="button" className="text-gray-500 hover:text-gray-700" title="Collapse">
                                            <i className="fas fa-minus"></i>
                                        </button>
                                        <button type="button" className="text-gray-500 hover:text-gray-700" title="Remove">
                                            <i className="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div className="px-6 py-4">
                                    <div className="flex flex-wrap -mx-3">
                                        {/* InfoBox */}
                                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                            <InfoBox text="Nombre de tâche en cours" valeur={projectDetails.estimatedBudget} />
                                        </div>
                                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                            <InfoBox text="Nombre de tâche en fini" valeur={projectDetails.spentBudget} />
                                        </div>
                                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                            <InfoBox text="Nombre de tâche annuler" valeur={projectDetails.estimatedDuration} />
                                        </div>
                                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                                            <InfoBox text="Progression" valeur={projectDetails.estimatedDuration} />
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <h4 className="text-lg font-semibold">Description</h4>
                                        <div className="post">
                                            <span className="text-gray-500">Created at - 7:45 PM today</span>
                                            <p className="mt-2">{projectDetails.description}</p>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="flex items-center">
                                            {/* listes des membres */}
                                            <img className="w-10 h-10 rounded-full mr-4 border border-lg" src={photo} alt="user" />
                                            <img className="w-10 h-10 rounded-full mr-4 border border-lg" src={photo} alt="user" />
                                            <img className="w-10 h-10 rounded-full mr-4 border border-lg" src={photo} alt="user" />
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfoProjectView;
