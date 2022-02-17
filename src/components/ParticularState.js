import React from 'react';
import { useParams } from "react-router-dom";
import TourismCards from './TourismCards';

const ParticularState = ({ destination }) => {
    const { state } = useParams();

  return (
    <>
        <div className='pt-12 pb-2 max-w-7xl mx-auto overflow-hidden'>
                {destination.filter((destination) => destination.state === state).map((destination) => (
                    <div className='text-center   flex-shrink-0' key={ destination.id }>
                        <img src={destination.imageUrl} alt={destination.imageAlt} className="h-32 w-full object-cover" />
                        <h1 className='m-8 font-semibold text-3xl'>All tourism center in {destination.state}</h1>
                    </div>
                ))}
        </div>

        <div className="grid gap-6 rounded-md md:grid-cols-2 xl:grid-cols-3 max-w-full lg:max-w-full mx-auto px-4 lg:px-8 pb-6 dark:bg-gray-800">
                {destination.filter((destination) => destination.state === state).map((destination) => destination.tourCenter.map((center) => (
                            <TourismCards center={center} key={ center.id }/>
                        )))}
        </div>
    </>
  )
}

export default ParticularState;