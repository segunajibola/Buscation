import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/fontawesome-free-solid'


// function toggleMenu() {
//   const btn = document.querySelector("button.mobile-menu-button");
//   const menu = document.querySelector(".mobile-menu");

//   btn.addEventListener("click", () => {
//     menu.classList.toggle("hidden");
//   }); 
// }

function darkMode() {
  const btn = document.getElementById("dark");
  if (btn.classList.contains("dark")) {
      btn.classList = "" }
  else {
      btn.classList = "dark";
  }
}

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 shadow-lg">
        <div className='max-w-7xl px-4 m-auto text-xs'>
          <div className="flex justify-between">
            <div className='flex space-x-8'>
              <div>
                {/* Website Logo --> show on all screens*/}
                <a href="#" className="flex items-center py-4 px-1">
                  <img className="w-12 h-8 inline-block" src="/images/buscation.png" alt="Buscation" />
                  <span className="font-semibold ml-1 text-base text-indigo-700 dark:text-white">Buscation</span>
                </a>
              </div>
              {/* Primary Navbar items --> show from md up */}
              <div className="hidden md:flex items-center space-x-3 text-indigo-600 dark:text-white"> 
                <Link to="/" className="py-4 px-2 hover:text-black">Home</Link>
                <Link className="py-4 px-2 hover:text-black transition duration-300">Experience</Link>
                <Link className="py-4 px-2 hover:text-black transition duration-300">Pickup Route</Link>
                <Link className="py-4 px-2 hover:text-black transition duration-300">Buscation Plus</Link>
                <Link className="py-4 px-2 hover:text-black transition duration-300">Work with us</Link>
                <Link className="py-4 px-2 hover:text-black transition duration-300">Contact Us</Link>
              </div>
            </div>

            {/* Secondary Navbar items --> show from md up */}
            <div class="hidden md:flex items-center space-x-3 "> 
              <a href="" className="py-2 px-2 font-medium text-white rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:text-white transition duration-300">Log In</a>
              <a href="" className="py-2 px-2 font-medium text-white rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 transition duration-300">Sign Up</a>
            </div>
            
            {/* Mobile menu button icon --> only shows in sm */}
            <div class="md:hidden flex items-center"> 
            <FontAwesomeIcon className="text-lg mt-1 mr-3 text-yellow-400 dark:text-white cursor-pointer" onClick={darkMode}  icon={faMoon} />
              <button className="outline-none mobile-menu-button">
                <svg className="w-6 h-6 dark:text-indigo-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>

            </div>

            

          </div>
        </div>

        <div className="hidden mobile-menu">
          <ul className="">
            <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
            <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
            <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
            <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
          </ul>
        </div>
      </nav>

</div>
  );
};

export default Navbar;
