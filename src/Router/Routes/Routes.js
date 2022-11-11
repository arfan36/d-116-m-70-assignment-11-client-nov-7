import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import ServiceAll from "../../Pages/Home/ServiceAll/ServiceAll";
import ServiceDetails from "../../Pages/Home/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/service-all',
                element: <ServiceAll></ServiceAll>
            },
            {
                path: '/service/:id',
                loader: ({ params }) => fetch(`https://d-116-1-m-70-assignment-11-server-nov-7.vercel.app/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
        ]
    },
]);

export default router;