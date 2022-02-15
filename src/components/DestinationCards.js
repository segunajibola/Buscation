import React from 'react';
import { Link } from "react-router-dom";


const DestinationCards = ({ destination }) => {
    return (
        <><Link to={ `/states/${destination.id}` } className='block'>
            <div className="flex items-center rounded-lg cursor-pointer bg-gray-200 dark:bg-gray-900 shadow-lg overflow-hidden hover:-translate-y-2.5 transform transition hover:scale-110">
                
                    <img src={destination.imageUrl} alt={destination.imageAlt} className="h-32 w-32 flex-shrink-0" />
                    <div className="px-5 py-4">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{destination.city}</h3>
                        <p className="text-gray-600 dark:text-white">
                            N{destination.averagePrice}
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm dark:text-white">
                                Explore {destination.propertyCount} properties
                            </a>
                        </div>
                    </div>
               
            </div>    </Link>         
        </>
    )
}

export default DestinationCards;