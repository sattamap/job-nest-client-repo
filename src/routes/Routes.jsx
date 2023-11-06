import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllJobs from "../pages/AllJobs/AllJobs";
import Blogs from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddJob from "../pages/AddJob/AddJob";
import JobDetails from "../components/JobDetails";
import MyJobs from "../pages/MyJobs/MyJobs";
import Update from "../pages/Update/Update";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }, 
        {
            path: 'all', 
            element: <AllJobs></AllJobs>
        }, 
        {
            path: 'blogs', 
            element: <Blogs></Blogs>
        },
        {
            path: 'appliedJobs', 
            element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
        },
        {
            path:"/job/:id",
            element:<PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>
        },
        {
            path:"/update/:id",
            element:<PrivateRoutes><Update></Update></PrivateRoutes>,
            loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
            path: 'myJObs', 
            element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
        },
        {
            path: 'login', 
            element: <Login></Login>
        },
        {
            path: 'register', 
            element: <Register></Register>
        },
        {
            path: 'add', 
            element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        
      ]
    },
  ]);


  export default router;