import { Link } from "react-router-dom";
import { faAngleDown } from '@fortawesome/fontawesome-free-solid'

const Home = () => {
    return (
        <div className="bg-gray-200 dark:bg-gray-900 grid lg:grid-cols-2 2xl:grid-cols-5">
            <div className="px-4 py-4 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
              <div className="max-w-xl">
                      <h1 className="mt-2 lg:mt-4 text-2xl font-bold text-gray-900 dark:text-white sm:mt-4 sm:text-4xl lg:text-3xl xl:text-4xl">
                          You can travel anywhere. 
                          <br />
                          <span className="text-indigo-500 dark:text-indigo-600">Take advantage of that.</span>
                      </h1>
                      <p className="mt-2 text-gray-600 dark:text-white sm:text-xl">
                          Buscation helps you tour beautiful locations so you can enjoy nature.
                      </p>
                      <img src="/images/bus.jpg" alt="People going in the bus" className="w-full h-52 my-2 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:object-cover object-center lg:hidden" />
                      <div className="mt-4 sm:mt-6 space-x-1">
                          <a href="#" className="inline-block px-5 py-3 uppercase tracking-wider font-semibold text-sm sm:text-base rounded-lg focus:outline-none focus:ring focus:ring-offset-2 bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-300 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 text-white shadow-lg hover:-translate-y-0.5 transform  transition ">Join next tour</a>
                          <a href="#" className="inline-block px-5 py-3 uppercase tracking-wider font-semibold text-sm sm:text-base rounded-lg focus:outline-none focus:ring focus:ring-offset-2 bg-gray-300 hover:bg-gray-200 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-400 text-gray-800">Know more</a>
                      </div>
              </div>
            </div>
            <div className="hidden relative lg:block 2xl:col-span-3 m-3">
                        <img src="/images/bus.jpg" alt="People going in the bus" className="absolute inset-0 w-full h-full rounded object-cover object-center" />
            </div>
        </div>
    )
}
export default Home;