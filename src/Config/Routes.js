import React from 'react';
import Login from '../Pages/Auth/SignIn/Login';
import Register from '../Pages/Auth/SignUp/Register';
import Home from '../Pages/Home/Home';



const routes = [
    {
        path : '/',
        component : Home,
        isPrivate : false, 
    },

    {
        path : '/signup',
        component : Register,
        isPrivate : false
    },
    {
        path : '/login',
        component : Login,
        isPrivate : false
    }
]

export default routes;