import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Home/Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    const [modals, setModals] = useState(null);

    const date = format(selectedDate, "PP")

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointment?date=${date}`)
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }

    return (
        <section className='mt-32'>
            <p className='font-semibold	 text-center text-secondary'>Available Services on: {format(selectedDate, 'PP')}</p>

            <div className='mx-16 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointment={option}
                        setModals={setModals}
                    ></AppointmentOption>)
                }
            </div>
            {
                modals &&
                <BookingModal
                    modals={modals}
                    selectedDate={selectedDate}
                    setModals={setModals}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;