import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/mainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
        //children: [ ], errorElement: <ErrorPage />
    },
]);

export default router;