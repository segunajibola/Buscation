import React from 'react';
import { useParams } from "react-router-dom";
import TourismCards from './TourismCards';

const ParticularState = ({ destination }) => {
    const { state } = useParams();

  return (
    <>
        <div className='pt-12 pb-4'>
                {destination.filter((destination) => destination.state === state).map((destination) => (
                    <div className='text-center max-w-7xl mx-auto' key={ destination.id }>
                        <img src={destination.imageUrl} alt={destination.imageAlt} className="h-32 w-full flex-shrink-0" />
                        <h1 className='m-8'>All tourism center in {destination.state}</h1>
                    </div>
                ))}
        </div>

        <div className='pt-12 pb-4'>
                {destination.filter((destination) => destination.state === state).map((destination) => destination.tourCenter.map((center) => (
                        <div className="mt-6 grid gap-6 rounded-md lg:grid-cols-2 lg:grid-row-3 xl:grid-cols-3" key={ center.id }>
                            <TourismCards center={center}/>
                        </div>
                        )))}
        </div>
    </>
  )
}

export default ParticularState;