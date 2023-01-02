import React, { useContext } from 'react';
import { UserContext } from '../../Context/UserContext/Context';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(UserContext);
};

export default PrivateRoute;