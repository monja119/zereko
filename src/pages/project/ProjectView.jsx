import TasksView from './TaskView';
import InfoProjectView from './InfoProjectView';
import { Link } from 'react-router-dom';

export default function ProjectView() {
    return (
        <div className="content-wrapper  m-10">
            <InfoProjectView />
            <TasksView />
            <div className="flex justify-end space-x-4 mr-5">
                <Link className="bg-gray-500 text-white py-4 px-8 rounded-md hover:bg-gray-600 transition duration-300 text-center " to="/projects">
                    Retour
                </Link>
                <Link className="bg-blue-500 text-white py-4 px-8 rounded-md hover:bg-blue-600 transition duration-300 text-center" to="/projects">
                    Modifier
                </Link>
            </div>
        </div>
    );
}
