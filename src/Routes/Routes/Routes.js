import { createBrowserRouter } from "react-router-dom";
import Courses from "../../layout/Courses";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog";
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
                
            ]
           },
           {
            path:'/login',
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