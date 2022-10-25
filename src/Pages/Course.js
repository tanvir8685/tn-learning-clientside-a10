import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const subject=useLoaderData();
    console.log(subject)
    return (
        <div>
            <h1>This is {subject.course_name} </h1>
        </div>
    );
};

export default Course;