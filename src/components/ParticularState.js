import React from 'react';
import { useParams } from "react-router-dom";
import TourismCards from './TourismCards';

const ParticularState = ({ destination }) => {
    const { state } = useParams();

  return (
    <div className='bg-gray-100 dark:bg-gray-700  overflow-hidden'>
        <div className='pt-12 max-w-7xl mx-auto'>
                {destination.filter((destination) => destination.state === state).map((destination) => (
                    <div className='text-center   flex-shrink-0' key={ destination.id }>
                        <img src={destination.imageUrl} alt={destination.imageAlt} className="h-32 w-full object-cover" />
                        <h1 className='mt-14 font-semibold text-3xl dark:text-white'>All tourism center in {destination.state}</h1>
                    </div>
                ))}
        </div>

        <div className="grid gap-6 rounded-md md:grid-cols-2 xl:grid-cols-3 max-w-full lg:max-w-full mx-auto px-4 lg:px-8 py-6 mb-3">
                {destination.filter((destination) => destination.state === state).map((destination) => destination.tourCenter.map((center) => (
                            <TourismCards center={center} key={ center.id }/>
                        )))}
        </div>
    </div>
  )
}

export default ParticularState;