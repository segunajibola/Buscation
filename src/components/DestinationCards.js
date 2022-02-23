import React from "react";
import { Link } from "react-router-dom";

const DestinationCards = ({ destination }) => {
  return (
    <Link to={`/states/${destination.state}`} className="block">
      <div className="flex transform cursor-pointer items-center overflow-hidden rounded-lg bg-gray-200 shadow-lg transition hover:-translate-y-2.5 hover:scale-105 dark:bg-gray-700">
        <img
          src={destination.imageUrl}
          alt={destination.imageAlt}
          className="h-32 w-32 flex-shrink-0"
        />
        <div className="px-5 py-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {destination.state}
          </h3>
          <p className="text-gray-600 dark:text-white">
            N{destination.averagePrice}
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="text-sm font-semibold text-indigo-500 hover:text-indigo-400 dark:text-white"
            >
              Explore {destination.propertyCount} properties
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCards;
