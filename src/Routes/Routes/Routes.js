import { createBrowserRouter } from "react-router-dom";
import Courses from "../../layout/Courses";
import Main from "../../layout/Main";
import AllCourses from "../../Pages/AllCourses";
import Blog from "../../Pages/Blog";
import CheckOut from "../../Pages/CheckOut";
import Course from "../../Pages/Course";
import FaQ from "../../Pages/FaQ";
import HeadCaru from "../../Pages/HeadCaru";
import InvalidPage from "../../Pages/InvalidPage";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



export  const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
           { path:'/',
           element:<HeadCaru></HeadCaru>
           },
           {
            path:'/courses',
            element:<Courses></Courses>,
            children:[
                {path:'/courses',
                element:<AllCourses></AllCourses>
                },
                {
                    path:'/courses/:id',
                    element:<Course></Course>,
                    loader:({params})=> fetch(`https://tn-learning-server.vercel.app/courses/${params.id}`)

                },
                {
                    path:'/courses/1/date:id',
                    element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                    loader:({params})=> fetch(`https://tn-learning-server.vercel.app/courses/1/date${params.id}`)
                },
                
        

            ]
           },
           {
            path:'login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'faq',
            element:<FaQ></FaQ>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           {
            path:'*',
            element:<InvalidPage></InvalidPage>
           },
           

        ]
        
        
    },
    
])