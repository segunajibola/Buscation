import React from 'react';
import { useParams } from "react-router-dom";

const ParticularState = ({ destination }) => {
    const { state } = useParams();

  return (
    <>
        <div className='pt-12 pb-4'>
                {destination.filter((destination) => destination.state === state).map((destination) => (
                    <div className='text-center max-w-7xl mx-auto' key={ destination.id }>
                        <img src={destination.imageUrl} alt={destination.imageAlt} className="h-32 w-full flex-shrink-0" />
                        <h1 className='m-8'>All tourism center in {destination.state}</h1>
                    
                        {/* <div className="flex items-center rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-900 shadow-lg overflow-hidden hover:-translate-y-2.5 transform transition hover:scale-110">
                            <img src={destination.imageUrl} alt="{destination.imageAlt}" className='h-40 w-26'/>
                            <div className="px-5 py-4">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{destination.name}</h3>
                                <p className="text-gray-600 dark:text-white">
                                    N{destination.averagePrice}
                                </p>
                                <div className="mt-4">
                                    <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm dark:text-white">
                                        Explore {destination.propertyCount} properties
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                ))}

                {destination.map((eachCenter) => eachCenter.tourCenter.map((center) => (
                    <h1>{center.name}</h1>
                )))}
        </div>
    </>
  )
}

export default ParticularState;