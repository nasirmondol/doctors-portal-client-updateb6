import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase/firebase.config';
import PrimaryButton from '../Home/Shared/PrimaryButton/PrimaryButton';
import { useForm } from 'react-hook-form';
import useToken from '../../token/useToken';


const Signup = () => {
    const [signUpError, setSingUpError] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)
    const navigate = useNavigate();

    if (token) {
        navigate('/')
    }



    if (user || gUser) {
        navigate('/')
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleSingUp = data => {
        setSingUpError('')
        createUserWithEmailAndPassword(data.email, data.password)
        updateProfile({ displayName: data.name })
        toast.success('User created successfully')
        console.log(data)
        saveUser(data.name, data.email)
        setSingUpError(error?.message)
    }

    if (loading) {
        return <PrimaryButton />
    }

    const saveUser = (name, email) => {
        const user = { name, email }
        const url = `http://localhost:5000/users`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Save user', data)
                setCreatedUserEmail(email)
            })
    }


    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-secondary font-bold text-center'>Sing up</h2>
                <form onSubmit={handleSubmit(handleSingUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",
                            { required: 'name is required' }
                        )}
                            placeholder="Your name"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.text && <small className='text-red-600'> Name is required</small>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input {...register("email",
                            { required: 'email is required' }
                        )}
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <small className='text-red-600'>email address is required</small>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input {...register("password", {
                            required: 'password is required',
                            minLength: { value: 6, message: 'password at least 8 characters or longer' },
                            pattern: { value: /[A-Za-z]/, message: 'required one character small and capital' }
                        })}
                            type="password" placeholder="password"
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <small className='text-red-600'>{errors.password.message}</small>}
                    </div>
                    <input className='w-full btn btn-accent mt-5' value="Sign Up" type="submit" />
                    {
                        signUpError && <p className='text-red-500'>{signUpError}</p>
                    }
                </form>
                <p><small>Already have an account? <Link to='/login' className='text-secondary '> Please Login </Link></small></p>
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline  w-full '>continue with google</button>
            </div>
        </div>
    );
};

export default Signup;