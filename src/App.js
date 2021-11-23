import "./assets/main.css";

function App() {
  return (
      <>
        <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
            <div className="px-4 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
              <div className="max-w-xl">
                      <img className="w-32 h-20 inline" src="/images/buscation.png" alt="Buscation" />
                      <h1 className="text-gray-900 inline m-5 ml-20 tracking-wide font-bold text-4xl">Buscation</h1>
                      <img src="/images/bus.jpg" alt="People going in the bus" className="w-full h-52 my-2 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:object-cover object-center lg:hidden" />
                      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                          You can travel anywhere. 
                          <br />
                          <span className="text-indigo-500">Take advantage of that.</span>
                      </h1>
                      <p className="mt-2 text-gray-600 sm:text-xl">
                          Buscation helps you tour beautiful locations so you can enjoy nature..
                      </p>
                      <div className="mt-4 sm:mt-6 space-x-1">
                          <a href="#" className="inline-block px-5 py-3 uppercase tracking-wider font-semibold text-sm sm:text-base rounded-lg focus:outline-none focus:ring focus:ring-offset-2 bg-indigo-500 hover:bg-indigo-300 focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-600 text-white shadow-lg hover:-translate-y-0.5 transform  transition ">Join next tour</a>
                          <a href="#" className="inline-block px-5 py-3 uppercase tracking-wider font-semibold text-sm sm:text-base rounded-lg focus:outline-none focus:ring focus:ring-offset-2 bg-gray-300 hover:bg-gray-200 focus:ring-gray-300 focus:ring-opacity-50 active:bg-gray-400 text-gray-800">Know more</a>
                      </div>
              </div>
            </div>
            <div className="hidden relative lg:block 2xl:col-span-3">
                        <img src="/images/bus.jpg" alt="People going in the bus" className="absolute inset-0 w-full h-full object-cover object-center" />
            </div>
        </div>

        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
               <h2 className="text-xl text-gray-900">Popular destination</h2>
               <p className="mt-2 text-gray-600">A selection of great work-freindly</p>
               <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                    <img src="/images/location1.jpeg" alt="Toronto skyline" className="h-32 w-32 flex-shrink-0" />
                    <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
                        <p className="text-gray-600">
                            $120
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                                Explore 76 properties
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                    <img src="/images/location1.jpeg" alt="Toronto skyline" className="h-32 w-32 flex-shrink-0" />
                    <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
                        <p className="text-gray-600">
                            $120
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                                Explore 76 properties
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                    <img src="/images/location1.jpeg" alt="Toronto skyline" className="h-32 w-32 flex-shrink-0" />
                    <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
                        <p className="text-gray-600">
                            $120
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                                Explore 76 properties
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                    <img src="/images/location1.jpeg" alt="Toronto skyline" className="h-32 w-32 flex-shrink-0" />
                    <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
                        <p className="text-gray-600">
                            $120
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                                Explore 76 properties
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                    <img src="/images/location1.jpeg" alt="Toronto skyline" className="h-32 w-32 flex-shrink-0" />
                    <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
                        <p className="text-gray-600">
                            $120
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                                Explore 76 properties
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
                    <img src="/images/location1.jpeg" alt="Toronto skyline" className="h-32 w-32 flex-shrink-0" />
                    <div className="px-6 py-4">
                        <h3 className="text-lg font-semibold text-gray-800">Toronto</h3>
                        <p className="text-gray-600">
                            $120
                        </p>
                        <div className="mt-4">
                            <a href="#" className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm">
                                Explore 76 properties
                            </a>
                        </div>
                    </div>
                </div>
                
               </div> 
            </div>  
      </>
  )
}

export default App;
