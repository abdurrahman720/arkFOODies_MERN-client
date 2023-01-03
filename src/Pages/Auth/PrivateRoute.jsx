import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext/Context';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(UserContext);
  
    const location = useLocation();

    if (loading) {
        return <div className=" bg-mybg"><progress className="progress w-full"></progress></div>
    }

    if (user?.uid) {
        return children
    }

    
     return  <Navigate to='/login' state={{from:location}} />
    
};

export default PrivateRoute;