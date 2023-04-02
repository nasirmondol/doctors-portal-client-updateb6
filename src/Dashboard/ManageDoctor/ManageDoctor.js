import { useQuery } from '@tanstack/react-query';
import { useState } from 'react'
import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Pages/Home/Shared/Loading/Loading';
import ConfirmationModal from '../../Pages/Home/Shared/ConfirmationModal/ConfirmationModal';

const ManageDoctor = () => {
    const [deletingModal, setDeletingModal] = useState(null)

    const closeModal = () => {
        setDeletingModal(null)
    }


    const { data: doctors, isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/doctors', {
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json()
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:5000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.deletedCount > 0) {
                    refetch()
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }
            })
    }


    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-2xl text-success mb-10">Manage doctor: {doctors?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Specialty</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={doctor.image} alt="" />
                                        </div>
                                    </div>
                                </td>

                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingModal(doctor)} htmlFor="doctor-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingModal && <ConfirmationModal
                    title={`Are you want to sure delete?`}
                    message={`${deletingModal.name} deleted successfully. It can't be undone.`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    modalData={deletingModal}
                    deleteModal={`Delete`}

                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default ManageDoctor;