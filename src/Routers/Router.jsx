import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Componants/Main/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Componants/Home/Home";
import Countries from "../Pages/Countries/Countries";
import PlaceDetails from "../Pages/tourPlace/PlaceDetails/PlaceDetails";
import LogIn from "../Pages/Login/LogIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/countries',
                element: <Countries></Countries>
            },
            {
                path: 'detail/:id',
                element: <PlaceDetails></PlaceDetails>,

            },
            {
                path: 'login',
                element: <LogIn></LogIn>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }

        ]


    },
]);