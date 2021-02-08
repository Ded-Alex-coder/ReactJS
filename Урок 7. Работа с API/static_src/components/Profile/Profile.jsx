import React from 'react';
import { Link } from 'react-router-dom';

export const Profile = () => {
    return (<div>
        <h1>Профиль</h1>
        Это Ваш профиль

        <Link to="/chats/">Обратно к чатам</Link>
    </div>)
}