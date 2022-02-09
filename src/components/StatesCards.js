import React from 'react';
import DestinationCards from './DestinationCards';
import popularDestinations from '../data/popularDestinations';
import { Link } from 'react-router-dom';

const StatesCards = () => {
  return (
    <div className="max-w-full lg:max-w-full mx-auto px-8 lg:px-8 py-4 dark:bg-gray-900">
        <h2 className="text-xl text-gray-900 dark:text-white text-center">Popular destination</h2>
        <p className="mt-2 text-gray-600 dark:text-white text-center">Collecton of great places in each states.</p>
            {/* <div className='text-center'>
            <p className='mt-2 text-gray-600 dark:text-white inline-block border-2 border-red-500 p-3'>Sort By Location<FontAwesomeIcon className="text-xl text-black inline-block ml-2 -mb-1 text-right dark:text-white cursor-pointer" icon={faAngleDown} /></p>
            <label for="location">Sort by Location:</label>
                <select name="location" id="location">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div> */}
            
            <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 dark:bg-gray-900">
            
            {/* <DestinationCards destination={popularDestinations[1]} key={popularDestinations[1].city} /> show for one */}

                {popularDestinations.map((eachDestination) => (
                    <>
                        <DestinationCards destination={eachDestination} key={eachDestination.city} />
                    </>
                ))}

                {/* <ul className='mt-10 font-medium text-center'> Only Lagos: </ul>
                    {popularDestinations.filter(destination => destination.city === 'Lagos').map(destination => <DestinationCards destination={destination} key={destination.city} />)} */}
            </div>
            <div className='text-center'>
                <Link to='/'><button className='border-4 rounded-lg border-indigo-500 px-2 py-1 m-4 text-2xl text-red-500'>See all</button></Link>
            </div>
    </div>  
  );
};

export default StatesCards;
