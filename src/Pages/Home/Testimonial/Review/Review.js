import React from 'react';

const Review = ({ review }) => {
    const { name, img, description, location } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
                <div className='flex items-center mt-4 mb-5'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' />
                        </div>
                    </div>
                    <div className='ml-4'>
                        <h5 className='text-lg font-bold'>{name}</h5>
                        <p className='font-bold'><small>{location}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;