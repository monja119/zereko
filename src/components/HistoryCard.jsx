import React from "react";

const HistoryCard = () => {
  return (
    <div className="card w-96 h-25 bg-white shadow-xl hover-scale">

        <div className="card-body">
            <div className="flex items-center gap-6">
                <div className="avatar">
                    <div className="w-16 mask mask-squircle">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-lg"> Titre de bénévole</h3>
                    <p className="text-gray-500 text-md">12/05/24 - 22/06/24</p>
                    <p className="text-gray-500 text-md">Localisation</p>
                </div>
            </div>
            <div className="flex gap-2 mt-6 text-xl">
                {/*<h3 className="font-bold">Nom du projet: </h3>*/}
                <span>Organisation</span>
            </div>

            <img className={"w-full object-cover rounded-md"} src="/assets/images/cards/forestation.png" alt="project" style={{height: "200px"}}/>

            <p className="text-bold text-gray-600">Description bla bla blaDescription bla bla blaDescription bla bla blaDescription bla bla bla...</p>

            
            <div className="flex gap-5 mt-6">
                <a className="font-bold underline hover:text-secondary transition all" href="/">Voir le détail</a>
                {/*<a href={githubLink} className="font-bold underline hover:text-secondary transition all">Voir le Code Source</a>*/}
            </div>
        </div>
        
    </div>
  );
}

export default HistoryCard;