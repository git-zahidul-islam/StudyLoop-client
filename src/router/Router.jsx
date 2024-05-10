import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/home/Home";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import Registration from "../pages/Registration";
import Login from "../pages/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/assignments',
                element: <Assignments></Assignments>
            },
            {
                path: '/create-assignments',
                element: <CreateAssignments></CreateAssignments>
            },
            {
                path: '/pending-assignments',
                element: <PendingAssignments></PendingAssignments>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);

export default router;