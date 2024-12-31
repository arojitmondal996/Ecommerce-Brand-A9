import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../conponents/MainLayout/MainLayout";
import Home from "../conponents/home/Home";
import AboutDev from "../conponents/About/AboutDev";
import Brands from "../conponents/Brands/Brands";
import MyProfile from "../conponents/MyProfile/MyProfile";
import Login from "../conponents/Login/Login";
import Register from "../conponents/Register/Register";
import CardDetails from "../conponents/CardDetails/CardDetails";
import Coupon from "../conponents/Coupon/Coupon";
import Coupons from "../conponents/Coupons/Coupons";
import ProductDetails from "../conponents/ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../conponents/UpdateProfile/UpdateProfile";
import Error from "../conponents/Error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("/category.json"),
            },
            {
                path: "/brands",
                element: <Brands />,
                loader: () => fetch("/category.json"),
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <MyProfile />
                </PrivateRoute>,
            },
            {
                path: "/about",
                element: <AboutDev />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/details",
                element: <CardDetails />
            },
            {
                path: "/coupon",
                element: <PrivateRoute>
                    <Coupon />
                </PrivateRoute>,
            },
            {
                path: "/coupons",
                element: <Coupons />,
                loader: () => fetch("/category.json"),
            },
            {
                path: "/product/:id",
                element: <PrivateRoute>
                    <ProductDetails />
                </PrivateRoute>,
                // loader: () => fetch("/category.json"),
                loader: async ({ params }) => {
                    const res = await fetch("/category.json")
                    const data = await res.json();
                    const singleProduct = data.find(product => (product._id == params.id))
                    return singleProduct;
                }
            },
            {
                path: "/update",
                element: <UpdateProfile />,
            }
        ],
    }
])

export default router;