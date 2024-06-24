
import { Link } from 'react-router-dom';
import photo from '/assets/images/personne1.jpg';

const TasksView = () => {
    // Exemple de données de tâches avec différents statuts
    const tasks = [
        {
            name: "Task 1",
            createdDate: "01.01.2022",
            description: "This is the first task.",
            attachments: ["file1.pdf", "file2.png"],
            status: "In Progress",
            members: [
                photo,
                photo
            ]
        },
        {
            name: "Task 2",
            createdDate: "02.01.2022",
            description: "This is the second task.",
            attachments: ["file3.docx", "file4.jpg"],
            status: "Completed",
            members: [
                photo,
                photo
            ]
        },
        {
            name: "Task 3",
            createdDate: "03.01.2022",
            description: "This is the third task.",
            attachments: [],
            status: "Cancelled",
            members: [
                photo,
                photo
            ]
        }
    ];

    // Fonction pour rendre la liste des membres
    const renderMembers = (members) => (
        <ul className="flex space-x-2">
            {members.map((member, idx) => (
                <li key={idx}>
                    <img alt="Avatar" className="w-10 h-10 rounded-full" src={member} />
                </li>
            ))}
        </ul>
    );

    // Fonction pour rendre la liste des pièces jointes
    const renderAttachments = (attachments) => (
        <ul className="list-none p-0">
            {attachments.map((attachment, idx) => (
                <li key={idx}>
                    <a href="#" className="text-blue-500 hover:underline">{attachment}</a>
                </li>
            ))}
        </ul>
    );

    // Fonction pour rendre le badge de statut avec classe dynamique en fonction du statut
    const renderStatusBadge = (status) => {
        let badgeClass = '';
        switch (status) {
            case 'In Progress':
                badgeClass = 'bg-blue-500 text-white';
                break;
            case 'Completed':
                badgeClass = 'bg-green-500 text-white';
                break;
            case 'Cancelled':
                badgeClass = 'bg-red-500 text-white';
                break;
            default:
                badgeClass = 'bg-yellow-500 text-white';
        }
        return <span className={`px-2 py-1 rounded ${badgeClass}`}>{status}</span>;
    };

    return (
        <div className="container mx-auto p-4">
            <div className="bg-gray-800 shadow rounded-lg bg-gray-800">
                <div className="bg-blue-700 rounded p-4 border-b">
                    <h3 className="text-lg font-semibold">Tasks</h3>
                </div>
                <div className="p-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Members</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attachments</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className=" divide-y divide-gray-200 bg-gray-800">
                            {tasks.map((task, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link to="#" className="text-blue-600 hover:underline">
                                            {task.name}
                                        </Link>
                                        <br />
                                        <small className="text-gray-500">
                                            Created {task.createdDate}
                                        </small>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{renderMembers(task.members)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{task.description}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{renderAttachments(task.attachments)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{renderStatusBadge(task.status)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap project-actions text-right flex flex-row">
                                        <Link className="btn btn-primary btn-sm m-2" to="/tasks/view" >
                                            <i className="fas fa-folder"></i> View
                                        </Link>
                                        <Link className="btn btn-info btn-sm m-2" to="/tasks/edit" >
                                            <i className="fas fa-pencil-alt"></i> Edit
                                        </Link>
                                        <button className="btn btn-danger btn-sm m-2" to="#">
                                            <i className="fas fa-trash"></i> Delete
                                        </button>
                                        <Link className="btn btn-secondary btn-sm m-2" to="/projects/inviter">
                                            <i className="fas fa-trash"></i> Ajouter une personne
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TasksView;
