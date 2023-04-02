import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import auth from '../../../firebase/firebase.config';

const BookingModal = ({ modals, selectedDate, setModals, refetch }) => {
    const [user] = useAuthState(auth)
    console.log(user)
    const { name, slots, price } = modals;

    const date = format(selectedDate, 'PP')

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            modals: name,
            appointmentDate: date,
            slot,
            patient: userName,
            email,
            phone,
            price
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking confirmed')
                    setModals(null)
                    refetch()
                }
                else {
                    toast.error(data.message)
                }
            })

        console.log(booking)

    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input input-bordered input-primary w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" disabled defaultValue={user?.text} name='userName' placeholder="Your Name" className="input input-bordered input-primary w-full" />
                        <input type="email" name='email' disabled defaultValue={user?.email} placeholder="Your Email" className="input input-bordered input-primary w-full" />
                        <input type="" name='phone' placeholder="Phone number" className="input input-bordered input-primary w-full" />
                        <input type="submit" className='w-full btn btn-accent' value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;