import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../home/home/Home";
import Assignments from "../pages/Assignments";
import CreateAssignments from "../pages/CreateAssignments";
import PendingAssignments from "../pages/PendingAssignments";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import MyAttempted from "../components/myAttempted/MyAttempted";
import AssignmentsDetails from "../pages/AssignmentsDetails";
import UpdateAssignments from "../pages/UpdateAssignments";
import MarkGive from "../pages/MarkGive";
import PrivateRouter from "./PrivateRouter";


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
                path: '/assignments/:id',
                element: <AssignmentsDetails></AssignmentsDetails>,
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_WEBSITE_API}/assignments/${params.id}`)
            },
            {
                path: '/create-assignments',
                element: <PrivateRouter><CreateAssignments></CreateAssignments></PrivateRouter>
            },
            {
                path: '/pending-assignments',
                element: <PrivateRouter>
                    <PendingAssignments></PendingAssignments>
                </PrivateRouter>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/my-attempted',
                element: <PrivateRouter>
                    <MyAttempted></MyAttempted>
                </PrivateRouter>
            },
            {
                path: '/update-assignments/:id',
                element: <UpdateAssignments></UpdateAssignments>,
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_WEBSITE_API}/assignments/${params.id}`)
            },
            {
                path: '/pending-assignments/:id',
                element: <MarkGive></MarkGive>,
                loader: ({ params }) =>
                    fetch(`${import.meta.env.VITE_WEBSITE_API}/submit-assignment/${params.id}`)
            }
        ]
    },
]);

export default router;