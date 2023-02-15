import { createBrowserRouter, RouteObject } from "react-router-dom";
import ActivityList from "../../features/activities/dashboard/ActivityList";
import ActivityForm from "../../features/activities/form/ActivityForm";
import HomePage from "../../features/home/HomePage";
import App from "../layout/App";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityList /> },
            { path: 'createActivity', element: <ActivityForm /> },
        ]
    }
]

export const router = createBrowserRouter(routes);