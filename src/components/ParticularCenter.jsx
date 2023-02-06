import React from "react";
import { useParams } from "react-router-dom";

const ParticularCenter = ({ destination }) => {
  const { state, center } = useParams();

  // get the state array
  const stateArr = destination.filter(
    (destination) => destination.state === state
  );
  console.log("stateArr", stateArr);

  // get the tourCenter array in the state array
  const tourCenterArr = stateArr[0].tourCenter;
  console.log("tourCenterArr", tourCenterArr);

  // get the center array
  const centerArr = tourCenterArr.filter((item) => item.name === center);
  console.log("centerArr", centerArr);

  return (
    <div className="overflow-hidden bg-gray-100 dark:bg-gray-700">
      <div className="mx-auto w-[98%] pt-[80px]">
        {centerArr.map((center) => (
          <div className="flex mx-auto gap-2 w-[90%] text-center pb-20">
            <img
              src={center.imageUrl}
              alt={center.imageAlt}
              className="h-[30rem] w-[50rem] rounded-2xl object-cover object-center"
            />
            <div className="px-5 py-2">
              <div className="flex justify-between">
                <h3 className="text-3xl font-semibold text-gray-800 dark:text-white">
                  {center.name}
                </h3>
                <div className="bg-gray-300 h-[50%] p-1 rounded-2xl">
                  {center.rating}
                </div>
              </div>
              <div className="text-left my-2 text-sm">
              <span className="font-semibold">Guide: </span>{center.guide}
              </div>
              <p className="mt-1 text-sm dark:text-white">
              <span className="font-semibold">Address: </span>{center.address}
              </p>
              <span>{center.opened}</span>
              <div className="test-sm m-1"><span className="font-semibold">Historical Events: </span>{center.historical}</div>
              <div className="test-sm m-1"><span className="font-semibold">Monuments: </span>{center.monuments}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParticularCenter;
