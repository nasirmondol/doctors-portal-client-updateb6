import React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import {useRouteError, Link} from 'react-router-dom'
import auth from '../../../../firebase/firebase.config';
const DisplayError = () => {
    const [signOut] = useSignOut(auth);
    const error = useRouteError()

    return (
        <div>
            <p className='text-red-500'>Something went wrong.</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-2xl'>Please <Link onClick={() => signOut()}> Sign out</Link>And Log back in</h4>
        </div>
    );
};

export default DisplayError;