import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Foundation from "./Foundational/Foundation.tsx";
import Intermediate from "./Intermediate/Intermediate.tsx";
import Advance from "./Advance/Advance.tsx";
import Page1 from "./tesRedux/Page1.jsx";
import Page2 from "./tesRedux/Page2.jsx";
import ReduxProvider from "./tesRedux/ReduxProvider.jsx";
import { reduxRoutes } from "./tesRedux/ReduxRoutes.jsx";
import Dashboard from "./Advance/components/Dashboard.tsx";
import Profile from "./Advance/components/tesHoc/Profile.tsx";
import Settings from "./Advance/components/tesHoc/Settings.tsx";
import DashboardHoc from "./Advance/components/tesHoc/DashboardHoc.tsx";
import Parent from "./Advance/components/performanceOpt/Parent.tsx";
import ParentZus from "./zustandTes/ParentZus.tsx";

/**
 * Bisa ditambah loader jika butuh fetch API
 * Action kalau ada submit form
 * errorElement untuk custom error page per route
 */
const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/foundation",
        element: <Foundation />,
    },
    {
        path: "/intermediate",
        element: <Intermediate />,
    },
    {
        path: "/advance",
        element: <Advance />,
    },
    {
        path: "/advance/dashboard",
        element: <DashboardHoc />,
        children: [
            {
                path: "profile",
                element: <Profile />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
    {
        path: '/advance/performance',
        element: <Parent />
    },
    reduxRoutes,
    {
        path: '/zustand',
        element: <ParentZus />
    }
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={myRouter} />
    </StrictMode>,
);
