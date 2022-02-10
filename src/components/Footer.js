import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div>
        <footer className="bg-gray-500 md:mx-0">
            <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-4 max-w-7xl gap-2 space-y-4 mx-auto md:mx-2">
                    <div>
                        <h5 className="font-semibold text-lg mt-4">
                            Company
                        </h5>
                        <p><Link>About</Link></p>
                        <p><Link>Awards</Link></p>
                        <p><Link>Contact us</Link></p>
                        <p><Link>Bus Terminals</Link></p>
                        <p><Link>FAQs</Link></p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-lg mb-1">
                            Exerience
                        </h5>
                        <p><Link>Tour Moments</Link></p>
                        <p><Link>Academy</Link></p>
                        <p><Link>Safety</Link></p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-lg mb-1">
                            Terms
                        </h5>
                        <p><Link>Privacy Policy</Link></p>
                        <p><Link>Terms & Condition</Link></p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-lg mb-1">
                            Connect
                        </h5>
                        <Link to="https://www.twitter.com/"><i className="fab fa-twitter text-blue-400 mr-2"></i><FontAwesomeIcon className="text-lg mt-1 mr-3 text-blue-800 dark:text-white cursor-pointer"  icon={faTwitter} /></Link>
                        <Link to="https://www.facebook.com/"><i className="fab fa-facebook text-blue-300 mr-2"></i><FontAwesomeIcon className="text-lg mt-1 mr-3 text-blue-800 dark:text-white cursor-pointer"  icon={faFacebook} /></Link>
                        <Link to="https://wa.me/"><i className="fab fa-whatsapp text-green-400 mr-2"></i><FontAwesomeIcon className="text-lg mt-1 mr-3 text-red-800 dark:text-white cursor-pointer"  icon={faInstagram} /></Link>
                        <Link to="https://www.instagram.com/"><i className="fab fa-instagram text-red-900 mr-2"></i><FontAwesomeIcon className="text-lg mt-1 mr-3 text-green-800 dark:text-white cursor-pointer"  icon={faWhatsapp} /></Link>
                        <p className='mt-4'>Download Our App</p>
                        <div className=''>
                        <Link><img src="/images/playstore.png" alt="People going in the bus" className="inline w-20 h-8" /></Link>
                        <Link><img src="/images/appstore.png" alt="People going in the bus" className="inline w-26 h-11" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer