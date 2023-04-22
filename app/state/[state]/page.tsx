"use client";

import React from "react";
import { useParams } from "next/navigation";
import Button from "../../../components/general/Button";
import { CenterCard } from "../../../components";
import allDestinations from "../../../data/allDestinations";
import Link from "next/link";
import Image from "next/image"

const ParticularState = () => {
  const { state }: Record<string, string>  = useParams();

  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="mx-auto pt-12 w-[90%]">
        {allDestinations
          .filter(
            (destination) =>
              destination.state ===
              state.charAt(0).toUpperCase() + state.slice(1)
          )
          .map((destination) => (
            <div className="flex-shrink-0 text-center" key={destination.id}>
              <Image
                width={500}
                height={500}
                src={destination.imageUrl}
                alt={destination.imageAlt}
                className="h-64 w-full object-cover object-center"
              />
              <h1 className="mt-14 text-3xl font-semibold dark:text-white">
                Tourism centers in {destination.state}
              </h1>
            </div>
          ))}
      </div>

      <div className="mx-auto w-[90%] mb-3 grid gap-6 rounded-md px-4 py-6 md:grid-cols-2 lg:px-8 xl:grid-cols-3">
        {allDestinations
          .filter(
            (destination) =>
              destination.state ===
              state.charAt(0).toUpperCase() + state.slice(1)
          )
          .map((destination) =>
            destination.tourCenter?.map((center) => (
              <CenterCard
                state={
                  destination.state.charAt(0).toLowerCase() + state.slice(1)
                }
                center={center}
                key={center.id}
              />
            ))
          )}
      </div>

      <Link href="/allstates" className="">
        <Button
          type="submit"
          text="See all states"
          classes="transform px-6 py-2 uppercase tracking-widest text-white"
          onClick={() => window.scrollTo(0, 0)}
        />
      </Link>
    </div>
  );
};

export default ParticularState;
