import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/Home";
import Reports from "../pages/Reports";
import Alerts from "../pages/Alerts";
import History from "../pages/History";
import Appointment from "../pages/Appointment";
import Feedback from "../pages/Feedback";
import Chat from "../pages/Chat";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/reports",
                element: <Reports />
            },
            {
                path: "/alerts",
                element: <Alerts />
            },
            {
                path: "/history",
                element: <History />
            },
            {
                path: "/appointment",
                element: <Appointment />
            },
            {
                path: "/feedback",
                element: <Feedback />
            },
            {
                path: "/chat",
                element: <Chat />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    }
]);

export default router;