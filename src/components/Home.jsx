import DestinationCards from "./DestinationCards";
import allDestinations from "../data/allDestinations";
import { Link } from "react-router-dom";

const Home = () => {
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
            Whether it's a place of interest, value, history or cultural significance - Tourcation saves your seat in the next tour to your favorite tourist attraction.
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

        <div className="mt-6 grid gap-6 rounded-md lg:grid-cols-2 xl:grid-cols-3">
          {/* <DestinationCards destination={popularDestinations[1]} key={popularDestinations[1].city} /> show for one */}
          {allDestinations
            .filter((item, index) => index < 6)
            .map((eachDestination) => (
              <>
                <DestinationCards
                  destination={eachDestination}
                  key={eachDestination.id}
                />
              </>
            ))}

          {/* <ul className='mt-10 font-medium text-center'> Only Lagos: </ul>
                    {popularDestinations.filter(destination => destination.city === 'Lagos').map(destination => <DestinationCards destination={destination} key={destination.city} />)} */}
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
          Find Tourist Attraction (by tourist centers)
        </h2>
        <div className="w-[80%] mx-auto">
          <input className="rounded-lg bg-gray-500 p-2 w-64 mx-auto" type="text" />
        <button className="p-2 m-3 bg-indigo-500 rounded-lg">Search</button>
        </div>
      </div>
    </>
  );
};
export default Home;
