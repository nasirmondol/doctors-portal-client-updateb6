import React from 'react';

const AppointmentOption = ({ appointment, setModals }) => {
    const { name, price, slots} = appointment;
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <h2 className="text-center font-bold text-xl text-secondary">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
                <p className='text-center'><small>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </small></p>
                <p className='text-center'><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label htmlFor="Booking-modal"
                    disabled={slots.length === 0}
                        className="text-white btn btn-primary bg-gradient-to-r from-primary to-secondary"
                        onClick={() => setModals(appointment)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;