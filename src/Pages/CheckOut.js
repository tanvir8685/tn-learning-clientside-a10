import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';



const CheckOut = ({children}) => {
    const {user}=useContext(AuthContext);
    console.log(user)
    
    const subDate=useLoaderData();
    console.log(subDate)

    return (
        <div>
            <h1 className='text-center'>Thank you!!  <span className='text-primary'>{user?.displayName}</span> </h1>
            <h1 className='text-center'>For Premium Access</h1>
            <h1 className='text-center'>Your "{subDate.course_name}" class will be start on <u>{subDate.date}</u></h1>
        </div>
    );
};

export default CheckOut;