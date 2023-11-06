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
            path:"/job/:id",
            element:<JobDetails></JobDetails>
        },
        {
            path: 'myJObs', 
            element: <MyJobs></MyJobs>
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
            element: <AddJob></AddJob>
        },
        
      ]
    },
  ]);


  export default router;