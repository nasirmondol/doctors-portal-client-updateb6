import React from 'react';

const InfoCard = ({info}) => {
    const {name, description, icon, bgClass} = info;
    return (
        <div className={`card card-side shadow-xl text-white font-bold ${bgClass} px-5`}>
            <figure><img  src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;