import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import ServiceAll from "../../Pages/Home/ServiceAll/ServiceAll";
import ServiceDetails from "../../Pages/Home/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login";
import Profile from "../../Pages/Profile/Profile";
import AddReview from "../../Pages/Reviews/AddReview";
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
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>,
            },
            {
                path: '/add-review/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/service/${params.id}`),
                element: <AddReview></AddReview>
            },
        ]
    },
]);

export default router;