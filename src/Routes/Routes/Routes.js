import { createBrowserRouter } from "react-router-dom";
import Courses from "../../layout/Courses";
import Main from "../../layout/Main";
import AllCourses from "../../Pages/AllCourses";
import Blog from "../../Pages/Blog";
import CheckOut from "../../Pages/CheckOut";
import Course from "../../Pages/Course";
import FaQ from "../../Pages/FaQ";
import HeadCaru from "../../Pages/HeadCaru";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";



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
                    loader:({params})=> fetch(`http://localhost:5000/courses/${params.id}`)

                },
                {
                    path:'/courses/1/date:id',
                    element:<CheckOut></CheckOut>,
                    loader:({params})=> fetch(`http://localhost:5000/courses/1/date${params.id}`)
                }

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
           }


        ]
        
    },
    
])