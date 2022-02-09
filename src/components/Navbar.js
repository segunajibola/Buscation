import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='max-w-xl p-3 m-auto flex justify-between m-5 text-xs'>
        <div>
          <Link className='flex'>Buscation</Link>
        </div>
        <div>
          <Link>Experience</Link>
        <Link>Pickup Route</Link>
        <Link>About</Link>
        <Link>Work with us</Link>
        <Link>Buscation Plus</Link>
        </div>
        <div>
        <Link>Sign-up</Link>
        <Link>Log-in</Link>          
        </div>
      </div>
  );
};

export default Navbar;
