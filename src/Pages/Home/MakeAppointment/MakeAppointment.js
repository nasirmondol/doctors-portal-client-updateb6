import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import background from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {

    return (
        <section className='mt-32'>
            <div style={{
                background: `url(${background})`
            }} className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-32 lg:w-1/2 hidden lg:block rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h4 className='text-secondary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-semibold text-white">Make an appointment Today</h1>
                        <p className="py-6 text-white">Ittext-4 is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;