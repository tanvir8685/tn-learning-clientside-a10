import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const[categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h2>All Subject {categories.length}</h2>
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