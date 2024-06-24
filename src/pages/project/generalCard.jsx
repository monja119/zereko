export default function GeneralCard() {
    return (
        <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-700 p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">General</h3>
                <button type="button" className="text-gray-300 hover:text-gray-100 transition duration-300" title="Collapse">
                    <i className="fas fa-minus"></i>
                </button>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <label htmlFor="inputName" className="block mb-1">Nom du projet</label>
                    <input type="text" id="inputName" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="inputDescription" className="block mb-1">Description</label>
                    <textarea id="inputDescription" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" rows="4"></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="inputStart" className="block mb-1">Date de début</label>
                    <input type="date" id="inputStart" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="inputEnd" className="block mb-1">Date de fin</label>
                    <input type="date" id="inputEnd" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
            </div>
        </div>
    );
}
