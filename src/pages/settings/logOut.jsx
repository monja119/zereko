import React, { useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logout} from "../../reducers/userReducer";

export default function LogOut () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem('user');
        dispatch(logout());
        navigate('/login');
    }, []);

    return (
        <div>
        <h1>Déconnexion</h1>
        </div>
    );
}