export default function InfoBox({ text, valeur }) {
    return (
        <div className="bg-blue-200 p-4 rounded-lg shadow-md">
            <div className="text-center">
                <span className="block text-sm text-gray-500">{text}</span>
                <span className="block text-lg text-gray-700 mt-2">${valeur}</span>
            </div>
        </div>
    );
}
