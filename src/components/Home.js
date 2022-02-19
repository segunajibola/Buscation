import DestinationCards from "./DestinationCards";
import allDestinations from "../data/allDestinations";
import { Link } from "react-router-dom";

// scroll = () => { window.scrollTo(0, 0); }
// function scroll() {
//     window.scrollTo(0, 0);
// };

const Home = () => {
  return (
    <>
      <div className="grid bg-gray-100 pt-16 dark:bg-gray-700 lg:grid-cols-2 2xl:grid-cols-5">
        <div className="mx-auto max-w-md px-4 py-4 sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 2xl:col-span-2">
          <div className="max-w-xl">
            <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-4xl lg:mt-4 lg:text-3xl xl:text-4xl">
              You can travel anywhere.
              <br />
              <span className="text-indigo-500 dark:text-indigo-600">
                Take advantage of that.
              </span>
            </h1>
            <p className="mt-2 text-gray-600 dark:text-white sm:text-xl">
              Buscation helps you tour beautiful locations so you can enjoy
              nature.
            </p>
            <img
              src="/images/bus.jpg"
              alt="People going in the bus"
              className="my-2 h-52 w-full rounded-lg object-center shadow-xl sm:mt-8 sm:h-64 sm:object-cover lg:hidden"
            />
            <div className="mt-4 space-x-1 sm:mt-6">
              <a
                href="#"
                className="focus:outline-none inline-block transform rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-400 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 focus:ring-offset-2 active:bg-indigo-600 dark:bg-indigo-600  sm:text-base "
              >
                Join next tour
              </a>
              <a
                href="#"
                className="focus:outline-none inline-block rounded-lg bg-gray-300 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-gray-800 hover:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-opacity-50 focus:ring-offset-2 active:bg-gray-400 sm:text-base"
              >
                Know more
              </a>
            </div>
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
      <div className="mx-auto max-w-full px-8 py-4 dark:bg-gray-800 lg:max-w-full lg:px-8">
        <h2 className="text-center text-xl text-gray-900 dark:text-white">
          Popular destination
        </h2>
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
    </>
  );
};
export default Home;
