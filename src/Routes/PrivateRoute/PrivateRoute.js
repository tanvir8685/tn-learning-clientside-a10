import React from 'react';
import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    if(loading){
        return (
            <div><Spinner animation="grow" variant="info" />
            <p>if you 1st time registerd with new id please reload the page other wise ignore it</p></div>
        
        
        )
    }
    
    if(!user){
        return <Navigate to='/login' state={{from:location}} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;