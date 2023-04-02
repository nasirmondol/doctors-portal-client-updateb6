import React from 'react';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png';
import PrimaryButton from '../../../component/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div style={{
            background: `url(${background})`
        }} className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 sm:w-full rounded-lg shadow-2xl" alt='' />
                <div className=''>
                    <h1 className="text-5xl font-bold">Your new smile starts here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;