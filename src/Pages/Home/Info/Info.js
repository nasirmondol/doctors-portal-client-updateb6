import React from 'react';
import watch from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard/InfoCard';

const Info = () => {

    const infoCard = [
        {
            id: 0,
            name: 'Opening hours',
            description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ',
            icon: watch,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 1,
            name: 'Visit our location',
            description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ',
            icon: location,
            bgClass: 'bg-accent'
        },
        {
            id: 2,
            name: 'Contact us now',
            description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                infoCard.map(info => <InfoCard
                    key={info.id}
                    info={info}
                ></InfoCard>)
            }

        </div>
    );
};

export default Info;