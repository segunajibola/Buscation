'use client';

import React from "react";
import Link from "next/link";

const StateCard = ({ destination }) => {
  return (
    <Link href={`/state/${destination.state.toLowerCase()}`} className="">
      <div className="flex h-[100%] transform cursor-pointer items-center overflow-hidden rounded-lg bg-gray-200 shadow-lg transition hover:-translate-y-2.5 hover:scale-105 dark:bg-gray-700">
        <img
          src={destination.imageUrl}
          alt={destination.imageAlt}
          className="h-[100%] w-40 flex-shrink-0 object-cover object-center"
        />
        <div className="px-5 py-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {destination.state}
          </h3>
          <p className="text-gray-600 dark:text-white">
            {destination.slogan}
          </p>
          <div className="mt-4">
            <a
              href="/"
              className="text-sm font-semibold text-indigo-500 hover:text-indigo-400 dark:text-white"
            >
              Explore {destination.tourCenter.length} tourist attractions
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StateCard;
