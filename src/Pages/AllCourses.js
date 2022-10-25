import React, { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Subject from './Subject';

const AllCourses = () => {
    const [subjects,setSubjects]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/courses')
        .then(res=>res.json())
        .then(data=>setSubjects(data))
    },[])
    return (
        <div>
            
           
            <div className='mt-5'>
            <Row xs={1} md={2} className="g-4">
                {
                    subjects.map(sub=><Subject
                    key={sub.course_id}
                    sub={sub}></Subject>)
                }
                </Row>
            </div>
        </div>
    );
};

export default AllCourses;