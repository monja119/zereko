import { useEffect } from 'react';

export default function Logout () {
    useEffect(() => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    }, []);
    return null;
}
