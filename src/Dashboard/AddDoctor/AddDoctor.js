import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const imgHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate()

    const { data: specialties } = useQuery({
        queryKey: ['specialties'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSelected')
            const data = await res.json()
            return data;
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('http://localhost:5000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} added successfully`)
                            navigate('/dashboard/managedoctor')
                        })
                }

            })




    }
    return (
        <div className="w-96 p-7">
            <h3 className='text-2xl mb-10'>Add a Doctor</h3>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
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
                        <span className="label-text">Specialty</span>
                    </label>
                    <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                        {
                            specialties?.map(specialty => <option
                                key={specialty._id}
                                value={specialty.name}
                            >{specialty.name}</option>)
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input {...register("image",
                        { required: 'photo is required' }
                    )}
                        type="file"
                        className="input input-bordered w-full max-w-xs" />
                    {errors.email && <small className='text-red-600'>email address is required</small>}
                </div>
                <input className='w-full btn btn-accent mt-5' value="Add Doctor" type="submit" />

            </form>
        </div>
    );
};

export default AddDoctor;