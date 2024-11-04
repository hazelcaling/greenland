import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "../components/HomePage";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }
        ]
    }
])

export default router
