import React from 'react';
import children from '../../../assets/images/treatment.png'

const Exceptional = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl px-20 mt-20">
            <figure><img className='lg:w-1/2 p-5' src={children} alt="Album" /></figure>
            <div className="card-body lg:w-1/2 justify-center items-center">
                <div className="justify-center items-center mr-5">
                    <h2 className="card-title font-bold text-4xl">Exceptional Dental</h2>
                    <h2 className="card-title font-bold text-4xl mb-2"> Care, On Your Terms</h2>
                    <p className='font-normal text-base'>It's a long established thats a long will be desreracted  by the reader content of a page when looking as a reads using lorem ipsum in to the perfects to the hailing the responsible duties with us and our long journey to the future on your hand.</p>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;