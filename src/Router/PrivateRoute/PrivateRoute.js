import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const PrivateRoute = ({ children }) => {

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }
    return children;
};

export default PrivateRoute;