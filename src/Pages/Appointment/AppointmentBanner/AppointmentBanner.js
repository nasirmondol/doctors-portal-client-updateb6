import React, { useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
        <header>
            <div style={{
                background: `url(${background})`
            }} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='appointment images' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='m-3 p-5'>
                        <DayPicker
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                        />
                       <p>You picked {format(selectedDate, 'PP')}.</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;