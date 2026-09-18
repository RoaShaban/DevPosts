import { createBrowserRouter } from "react-router";
import Home from './pages/Home'
import Posts from './pages/Posts'
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/posts",
                element: <Posts />
            }
        ]
    }
]);

export default router;