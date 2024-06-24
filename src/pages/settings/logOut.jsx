import React, { useEffect} from 'react';

export default function LogOut () {

    useEffect(() => {
        localStorage.removeItem('webcup_user');
        localStorage.removeItem('webcup_token');
        window.location.href = '/sign';
    }, []);

    return (
        <div>
        <h1>LogOut</h1>
        </div>
    );
}