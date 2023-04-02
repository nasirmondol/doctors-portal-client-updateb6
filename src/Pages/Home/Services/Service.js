import React from 'react';

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='w-28 h-24' src={img} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className=' font-semibold'>{name}</h2>
                <p className='font-normal'>{description}</p>
            </div>
        </div>
    );
};

export default Service;