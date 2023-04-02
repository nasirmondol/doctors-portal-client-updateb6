import React from 'react';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import quote from '../../../assets/icons/quote.svg'
import Review from './Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Henry williams',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location: 'California'
        },
        {
            _id: 2,
            name: 'Henry williams',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location: 'California'
        },
        {
            _id: 3,
            name: 'Henry williams',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location: 'California'
        },
    ]
    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-secondary font-bold'>Testimonials</h4>
                    <h2 className='text-4xl font-semibold'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='sm:w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;