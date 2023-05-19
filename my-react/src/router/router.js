import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Statistical from '../features/Statistical/Statistical';
import Page_Container from '../Page/Container';
import Login from '../features/login/Login';
import Homepage from '../features/hompage/Homepage';
import Area from '../features/area/area';
import Account from '../features/account/account';
import NotFound from '../features/Camera/NotFound';
import ChangePass from '../features/changepassword/ChangePass';
import SttBoard from '../features/statisticalboard/sttboard';
import Userif from '../features/userif/Userif';

const Router = createBrowserRouter([
    {
        path: "/notfound",
        element: <NotFound />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Page_Container />,
        children: [
            {
                index: true,
                element: <Homepage />
            },
            {
                path: '/Statistical',
                element: <Statistical />
            },
            {
                path: '/area',
                element: <Area />
            },
            {
                path: '/account',
                element: <Account />
            },
            {
                path: '/ChangePassword',
                element: <ChangePass />
            },
            {
                path: '/statisticalboard',
                element: <SttBoard />
            },
            {
                path: '/info',
                element: <Userif />
            },
        ]
    },

]);

export default Router;