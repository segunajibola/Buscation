import React from "react";
import { Link } from "react-router-dom";

const CenterCard = ({ state, center }) => {
  return (
    <Link to={`/${state}/${center.name.toLowerCase()}`} className="block">
      <div className="flex h-[100%] transform cursor-pointer items-center overflow-hidden rounded-lg bg-gray-200 shadow-lg transition hover:-translate-y-2.5 hover:scale-105 dark:bg-gray-900">
        <img
          src={center.imageUrl}
          alt={center.imageAlt}
          className="h-[100%] w-40 flex-shrink-0 object-cover object-center bordber-4 border-red-500"
        />
        <div className="px-3 py-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {center.name}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-white">
            Address: {center.address}
          </p>
          <div className="mt-2">
            <div>Rating: {center.rating}</div>
            <div>State: {center.state?.charAt(0).toUpperCase() + state?.slice(1)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CenterCard;
