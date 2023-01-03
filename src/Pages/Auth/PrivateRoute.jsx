import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext/Context';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(UserContext);
  
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    if (user?.uid) {
        return children
    }

    
     return  <Navigate to='/login' state={{from:location}} />
    
};

export default PrivateRoute;