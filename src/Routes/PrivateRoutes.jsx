import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthContextProviders';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}  = useContext(AuthContext);
    if(loading)
    {
        return <progress className="progress progress-info w-56" value="100" max="100"></progress>
    }
    if(user)
    {
        return children;
    }
    else{
         return <Navigate to='/login' replace={true}></Navigate>
    }
};

export default PrivateRoutes;