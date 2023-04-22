'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image"

const CenterCard = ({ state, center }) => {
  return (
    <Link href={`/state/${state}/center/${center.name.toLowerCase()}`} className="block">
      <div className="flex h-[100%] transform cursor-pointer items-center overflow-hidden rounded-lg bg-gray-200 shadow-lg transition hover:-translate-y-2.5 hover:scale-105 dark:bg-gray-900">
        <Image
          width={500}
          height={500}
          src={center.imageUrl}
          alt={center.imageAlt}
          className="h-[100%] w-40 flex-shrink-0 object-cover object-center"
        />
        <div className="px-3 py-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {center.name}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-white truncate">
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
