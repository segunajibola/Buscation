import StateCard from "./StateCard";
import allDestinations from "../data/allDestinations";
import { Link } from "react-router-dom";
import { useState } from "react";
import CenterCard from "./CenterCard";

// react-icons in footer instead of fontawesome

const Home = () => {
  const [tour, SetTour] = useState("");
  const [state, SetState] = useState("");

  const onSubmitTour = (e) => {
    e.preventDefault();
    SetTour(tour);
  };

  let tourCenterArr = [];

  for (let i = 0; i < allDestinations.length; i++) {
    tourCenterArr.push(
      allDestinations[i].tourCenter.filter((item) =>
        item.name.toLowerCase().includes(tour.toLowerCase())
      )
    );
  }

  console.log("tourCenterArr", tourCenterArr);

  const filteredArray = [];

  if (tour) {
    for (let i = 0; i < tourCenterArr.length; i++) {
      filteredArray.push(
        tourCenterArr[i].reduce(
          (obj, item) => ({
            id: item.id,
            name: item.name,
            state: item.state,
            historical: item.historical,
            info: item.info,
            address: item.address,
            rating: item.rating,
            imageUrl: item.imageUrl,
            imageAlt: item.imageAlt,
            opened: item.opened,
            guide: item.guide,
          }),
          {}
        )
      );
    }
  }

  console.log("filteredArray", filteredArray, typeof filteredArray);

  const finalArray = filteredArray.filter(
    (value) => Object.keys(value).length !== 0
  );

  console.log("finalArray", finalArray, typeof finalArray);

  // const onSubmitState = (e) => {
  //   e.preventDefault();
  //   SetState(state);
  // };

  // let stateCenterArr = [];

  // stateCenterArr.push(
  //   allDestinations.filter((item) =>
  //     item.state.toLowerCase().includes(state.toLowerCase())
  //   )
  // );

  // console.log("stateCenterArr", stateCenterArr);
  // console.log("state", state);

  // get the state arr
  //
  //

  // const stateArr = allDestinations.map(item => )

  return (
    <>
      <div className="grid bg-gray-100 pt-16 lg:pt-20 lg:pb-8 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5 content-start">
        <div className="mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-0 h-[28drem] xl:mr-0 2xl:col-span-2">
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white sm:mt-4 lg:mt-4  ">
            Tour beautiful places.
            <br />
            <span className="text-indigo-500 dark:text-indigo-600">
              Make lasting memories.
            </span>
          </h1>
          <p className="my-4 md:mt-8 text-gray-600 dark:text-white sm:text-xl">
            Whether it's a place of interest, value, history or cultural
            significance - Tourcation saves your seat in the next tour to your
            favorite tourist attraction.
          </p>
          <img
            src="/images/bus.jpg"
            alt="People going in the bus"
            className="my-2 h-64 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden"
          />
          <div className="mt-8 md:mt-32 inline-block overflow-hidden space-x-1">
            <a
              href="/"
              className="focus:outline-none inline-block transform rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-indigo-600 dark:bg-indigo-600  sm:text-base "
            >
              Join next tour
            </a>
            <a
              href="/"
              className="focus:outline-none inline-block rounded-lg bg-gray-300 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base"
            >
              Know more
            </a>
          </div>
        </div>

        <div className="relative m-3 hidden lg:block 2xl:col-span-3">
          <img
            src="/images/bus.jpg"
            alt="People going in the bus"
            className="absolute inset-0 h-full w-full rounded object-cover object-center"
          />
        </div>
      </div>
      <div className="mx-auto max-w-full px-8 py-20 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Find Tourist Attraction <br />
          (by state)
        </h2>
        <form className="w-[80%] mx-auto text-center">
          <input
            className="rounded-lg bg-gray-500 p-2 w-[18rem] mx-auto my-5"
            type="text"
            placeholder="search state here"
            onChange={(e) => SetState(e.target.value)}
          />
        </form>
        <div className="mt-6 grid gap-8 w-[80%] mx-auto lg:grid-cols-2">
          {state? allDestinations
            .filter((item, index) => item.state.toLowerCase() === state.toLowerCase())
            .map((eachDestination) => (
              <StateCard
                destination={eachDestination}
                key={eachDestination.id}
              />
            )) : ""}
        </div>
        <div className="mt-6 grid gap-6 rounded-md lg:grid-cols-2 xl:grid-cols-3">
          {allDestinations
            .filter((item, index) => index < 6)
            .map((eachDestination) => (
              <StateCard
                destination={eachDestination}
                key={eachDestination.id}
              />
            ))}
        </div>
        <div className="text-center">
          <Link to="/all-states">
            <button
              className="m-5 transform rounded-lg bg-indigo-500 px-6 py-2 text-sm font-semibold uppercase tracking-widest text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 dark:border-white dark:bg-indigo-600 dark:text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              See all
            </button>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-full px-8 py-40 bg-gray-100 dark:bg-gray-700 lg:max-w-full lg:px-8">
        <h2 className="mb-5 text-center text-2xl font-semibold tracking-wider text-gray-900 dark:text-white">
          Find Tourist Attraction <br />
          (by tourist centers)
        </h2>
        <form className="w-[80%] mx-auto text-center" onSubmit={onSubmitTour}>
          <input
            className="rounded-lg bg-gray-500 p-2 w-[18rem] mx-auto my-5"
            type="text"
            placeholder="type your favourite tourism attraction"
            onChange={(e) => SetTour(e.target.value)}
          />
        </form>

        <div className="mt-6 grid gap-8 w-[80%] mx-auto lg:grid-cols-2">
          {finalArray?.map((item) => (
            <CenterCard state={item.state} center={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
