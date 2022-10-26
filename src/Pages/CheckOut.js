import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CheckOut = () => {
    const subDate=useLoaderData();
    console.log(subDate)

    return (
        <div>
            <h1 className='text-center'>Thank you!!</h1>
            <h1 className='text-center'>For Premium Access</h1>
            <h1 className='text-center'>Your "{subDate.course_name}" class will be start on <u>{subDate.date}</u></h1>
        </div>
    );
};

export default CheckOut;