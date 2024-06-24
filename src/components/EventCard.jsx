import React from "react";

const EventCard = () => {
    return (
        
        <div className="card lg:card-side bg-base-100 shadow-xl w-full max-h-[300px]">
            <figure><img src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                    24h by Webcup – 24 heures pour faire un site web
                </h2>
                <p>Ton domaine de prédilection est la conception et la création de site Internet : programmeur, designer, chef de projet, …? Etudiant(e), professionnel(e), passionné(e) ? La Webcup est LE concours de développement web fait pour toi ! Aux Comores, le 24h By Webcup est organisée par l’ACTIC (Association Comorienne des Technologies de l’Information et de la Communication). A l’île de La Réunion, le 24h By Webcup est organisée par « l’Association Webcup » qui est également à l’initiative de ce concours. A Madagascar, la compétition est organisée par l'association Avana Hub. Maurice
A l’île Maurice, la Webcup est organisée par la FINAM (Federation of Innovative & Numeric Activities in Mauritius) A Mayotte, la compétition est organisée par Mayotte in Tech, French Tech Mayotte et la CCI Mayotte. A l’île Rodrigues, la compétition est organisée par le RiTA (Rodrigues Information Technology Association).</p>
                <div className="card-actions justify-end flex-col">
                    <button className="px-4 py-4 bg-secondary text-white rounded-md shadow-md">Interréssé(e)</button>
                    <p className="text-gray-300 mt-1">148 personnes sont Interréssées</p>
                </div>
            </div>
        </div>
    )
}
export default EventCard