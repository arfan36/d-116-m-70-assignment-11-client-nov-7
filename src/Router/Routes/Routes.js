import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import ServiceAll from "../../Pages/Home/ServiceAll/ServiceAll";
import ServiceDetails from "../../Pages/Home/ServiceDetails/ServiceDetails";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Profile from "../../Pages/Profile/Profile";
import AddReview from "../../Pages/Reviews/AddReview";
import UpdateReview from "../../Pages/Reviews/UpdateReview";
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
            {
                path: '/update-review/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
                element: <UpdateReview></UpdateReview>
            },
            {
                path: 'my-review/:email',
                loader: ({ params }) => fetch(`http://localhost:5000/reviews?email=${params.email}`),
                element: <PrivateRoute>
                    <MyReview></MyReview>
                </PrivateRoute>
            },
            {
                path: '/my-service',
                element: <AddService></AddService>
            },
        ]
    },
]);

export default router;