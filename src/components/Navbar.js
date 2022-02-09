import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className='flex justify-between m-5'>
        <Link>Buscation</Link>
        <Link>Experience</Link>
        <Link>Pickup Route</Link>
        <Link>About</Link>
        <Link>Work with us</Link>
        <Link>Buscation Plus</Link>
        <Link>Sign-up</Link>
        <Link>Log-in</Link>
      </div>
  );
};

export default Navbar;
