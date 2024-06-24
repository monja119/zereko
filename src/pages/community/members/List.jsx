import React, {useEffect, useState} from 'react';
import {listUsers, updateUser, activateUser, deactivateUser} from '../../../services/userService';

export default function ListMembers() {
    const [data, setData] = useState([]);

    const activatingStatusUser = async (id) => {
        activateUser(id)
        .then(async (res) => {
            const response= await res.data;
            window.location.reload();
        });
    }

    const deactivatingStatusUser = async (id) => {
        deactivateUser(id)
        .then(async (res) => {
            const response= await res.data;
            window.location.reload();
        });
    }


    useEffect(() => {
        listUsers()
        .then(async (res) => {
            const response= await res.data.users;
            setData(response);
        });
    }, []);

  return (
    <>
      <div className="mt-24">
        <div className="w-full">
            <div className="rounded-lg h-full mb-3">
                <div className="bg-gray-100 p-4">
                    <div className="w-full flex">
                        <div className="w-full">
                            <h3 className="card-title">Les vétérants</h3>
                            <div className="flex">
                                <div className="w-[75%] mt-1">
                                    <input id="input_numero_facture" type="text" className="w-full border rounded-md px-4 py-2" placeholder="ID, Email, Nom" />
                                </div>
                                <div className="w-[25%] mt-1 ml-4">
                                    <button id="btn-search" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Rechercher</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 overflow-y-scroll">
                    <table id="table" className="w-full border border-gray-300 rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-2">ID</th>
                                <th className="py-2 text-center">Nom</th>
                                <th className="py-2 text-center">Email</th>
                                <th className="text-center py-2">Date de demande</th>
                                <th className="text-center py-2">Date d'acceptation</th>
                                <th className="text-center py-2">Statut</th>
                                <th className="text-center py-2">ACtion</th>
                            </tr>
                        </thead>
                        <tbody id="tbody-container">
                            {
                                
                                data?.map((user, index) => (
                                    <tr key={index}>
                                        <td className="py-2">{user.id}</td>
                                        <td className="text-center py-2">{user.name}</td>
                                        <td className="text-center py-2">{user.email}</td>
                                        <td className="text-center py-2">{user.created_at}</td>
                                        <td className="text-center py-2">{user.updated_at}</td>
                                        <td className="text-center py-2">
                                            {
                                                user.status === 0 ? <span className="bg-yellow-500 text-white px-2 py-1 rounded-full">En attente</span> : <span className="bg-green-500 text-white px-2 py-1 rounded-full">Accepté</span>
                                            }
                                        </td>
                                        <td className="text-center py-2">
                                            <button 
                                            hidden={user.status === 1}
                                            onClick={() => activatingStatusUser(user.id)}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >Accepter</button>
                                            <button 
                                            hidden={user.status ===0}
                                            onClick={() => deactivatingStatusUser(user.id)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Désactiver</button>
                                        </td>
                                    </tr>
                                )) 
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}