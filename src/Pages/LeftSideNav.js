import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('https://tn-learning-server.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2 className='mt-5'>Course List</h2>
            <div>
                {
                    categories.map(subject=><p key={subject.course_id}>
                       <Link to={`${subject.course_id}`}>{subject.course_name}</Link> 
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;