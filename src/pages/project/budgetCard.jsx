export default function BudgetCard() {
    return (
        <div className="bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-blue-700 p-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">Budget</h3>
                <button type="button" className="text-gray-300 hover:text-gray-100 transition duration-300" title="Collapse">
                    <i className="fas fa-minus"></i>
                </button>
            </div>
            <div className="p-4">
                <div className="mb-4">
                    <label htmlFor="inputEstimatedBudget" className="block mb-1">Estimated budget</label>
                    <input type="number" id="inputEstimatedBudget" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="inputSpentBudget" className="block mb-1">Total amount spent</label>
                    <input type="number" id="inputSpentBudget" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
                <div className="mb-4">
                    <label htmlFor="inputEstimatedDuration" className="block mb-1">Estimated project duration</label>
                    <input type="number" id="inputEstimatedDuration" className="border border-gray-800 rounded-md w-full p-2 bg-gray-700 text-white" />
                </div>
            </div>
        </div>
    );
}
