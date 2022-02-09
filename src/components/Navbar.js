import React from 'react';
import { Link } from 'react-router-dom';

  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow-lg">
        <div className='max-w-xl p-3 m-auto flex justify-between text-xs'>
          <div className='flex'>
            <Link>Buscation</Link>
          </div>
          <div className='flex'>
            <Link>Experience</Link>
            <Link>Pickup Route</Link>
            <Link>About</Link>
            <Link>Work with us</Link>
            <Link>Buscation Plus</Link>
          </div>
          <div className='flex'>
            <Link>Sign-up</Link>
            <Link>Log-in</Link>          
          </div>
        </div>
      </nav>

</div>
  );
};

export default Navbar;
