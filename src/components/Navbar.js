import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/fontawesome-free-solid'

function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.classList.contains("hidden")) {
    menu.classList = " " }
  else {
    menu.classList = "hidden";
}};

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
      <nav className="z-10 fixed w-full bg-white dark:bg-gray-800 shadow-lg">
        <div className='z-20 max-w-7xl px-4 m-auto text-xs'>
          <div className="flex justify-between">
            <div className='flex space-x-8'>
              <div className='md:mr-32'>
                {/* Website Logo --> show on all screens*/}
                <a href="#" className="flex items-center py-4 px-1">
                  <img className="w-12 h-8 inline-block" src="/images/buscation.png" alt="Buscation" />
                  <span className="font-semibold ml-1 text-base text-indigo-700 dark:text-white">Buscation</span>
                </a>
              </div>
              {/* Primary Navbar items --> show from md up */}
              <div className="hidden md:flex items-center space-x-8 text-indigo-600 dark:text-white"> 
                <Link to="/" className="py-4 px-2 hover:text-black dark:hover:text-gray-400">Home</Link>
                <Link to="/experience" className="py-4 px-2 hover:text-black dark:hover:text-gray-400 transition duration-300">Experience</Link>
                <Link to="/pickup-route" className="py-4 px-2 hover:text-black dark:hover:text-gray-400 transition duration-300">Pickup Route</Link>
                <Link to="/buscation-plus" className="py-4 px-2 hover:text-black dark:hover:text-gray-400 transition duration-300">Buscation Plus</Link>
                <Link to="/woek-with-us" className="py-4 px-2 hover:text-black dark:hover:text-gray-400 transition duration-300">Work with us</Link>
                <Link to="/contact" className="py-4 px-2 hover:text-black dark:hover:text-gray-400 transition duration-300">Contact Us</Link>
              </div>
            </div>

            {/* Secondary Navbar items --> show from md up */}
            <div class="hidden md:flex items-center space-x-3">
              <Link to="/log-in" className="py-2 px-2 font-medium text-white rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:text-white transition duration-300">Log In</Link>
              <Link to="/sign-up" className="py-2 px-2 font-medium text-white rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 transition duration-300">Sign Up</Link>
            </div>
            <div>
              <FontAwesomeIcon className="text-xl mt-6 ml-24 sm:ml-80 md:ml-0 -mr-20 text-yellow-400 dark:text-white cursor-pointer" onClick={darkMode} icon={faMoon} />
            </div>
            
            {/* Mobile menu button icon --> only shows in sm */}
            <div class="md:hidden flex items-center"> 
              <button className="outline-none" onClick={toggleMenu}>
                <svg className="w-6 h-6 dark:text-indigo-500" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"> <path d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>

            </div>

          </div>
        </div>

        <div className="hidden" id='menu'>
          <ul className="dark:text-white py-3 px-2 m-1 bg-gray-500" onClick={toggleMenu}>
            <li className=""><Link to="/" className="block text-sm px-2 py-4 hover:bg-indigo-400 dark:hover:bg-indigo-300 dark:hover:text-black">Home</Link></li>
            <li><Link to="/services" className="block text-sm px-2 py-4 hover:bg-indigo-400 transition duration-300 dark:hover:text-black dark:hover:bg-indigo-300">Services</Link></li>
            <li><Link to="/about" className="block text-sm px-2 py-4 hover:bg-indigo-400 transition duration-300 dark:hover:text-black dark:hover:bg-indigo-300">About</Link></li>
            <li><Link to="/contact" className="block text-sm px-2 py-4 hover:bg-indigo-400 transition duration-300 dark:hover:text-black dark:hover:bg-indigo-400">Contact Us</Link></li>
            <li><Link to="/log-in" className="inline-block py-2 my- px-2 font-medium text-white rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 dark:text-white transition duration-300">Log In</Link></li>
            <li><Link to="/sign-up" className="inline-block py-2 px-2 my-2 font-medium text-white rounded bg-indigo-500 dark:bg-indigo-600 hover:bg-indigo-600 transition duration-300">Sign Up</Link></li>
          </ul>
        </div>
      </nav>
  );
};

export default Navbar;
