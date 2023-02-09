import React from 'react';
import { Link } from 'react-router-dom';

const TourismCards = ({state, center}) => {
  return (
    <Link to={`/${state}/${center.name.toLowerCase()}`} className='block'>
      <div className='flex transform cursor-pointer items-center overflow-hidden rounded-lg bg-gray-200 shadow-lg transition hover:-translate-y-2.5 hover:scale-105 dark:bg-gray-900'>
        <img
          src={center.imageUrl}
          alt={center.imageAlt}
          className='h-48 w-40 flex-shrink-0 object-cover object-center'
        />
        <div className='px-3 py-2'>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white'>
            {center.name}
          </h3>
          <p className='mt-2 text-gray-600 dark:text-white'>
            Address: {center.address}
          </p>
          <div className='mt-2'>
            <a
              href='/'
              className='text-sm font-semibold text-indigo-500 hover:text-indigo-400 dark:text-white'
            >
              Rating: {center.rating}
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourismCards;
