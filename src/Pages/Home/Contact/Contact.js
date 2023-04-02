import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section className='p-16 mt-20' style={{
            background: `url(${appointment})`
        }}>
            <form className='grid grid-cols-1 justify-items-center gap-5 mb-4'>
                <div>
                    <p className='text-secondary text-center font-medium'>Contact us</p>
                    <h2 className='font-bold text-3xl text-white mb-10'>Stay connect with us</h2>
                </div>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </section>
    );
};

export default Contact;