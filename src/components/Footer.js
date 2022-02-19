import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div>
      <footer className="bg-gray-400 dark:bg-gray-900 dark:text-gray-400 md:mx-0">
        <div className="p-4">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 md:mx-2 md:grid-cols-4 ">
            <div>
              <h5 className="mt-4 text-lg font-semibold dark:text-gray-200">
                Company
              </h5>
              <p>
                <Link>About</Link>
              </p>
              <p>
                <Link>Awards</Link>
              </p>
              <p>
                <Link>Contact us</Link>
              </p>
              <p>
                <Link>Bus Terminals</Link>
              </p>
            </div>
            <div>
              <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
                Exerience
              </h5>
              <p>
                <Link>Tour Moments</Link>
              </p>
              <p>
                <Link>Academy</Link>
              </p>
              <p>
                <Link>Safety</Link>
              </p>
              <p>
                <Link>FAQs</Link>
              </p>
            </div>
            <div>
              <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
                Terms
              </h5>
              <p>
                <Link>Privacy Policy</Link>
              </p>
              <p>
                <Link>Terms & Condition</Link>
              </p>
            </div>
            <div>
              <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
                Connect
              </h5>
              <Link to="https://www.twitter.com/">
                <FontAwesomeIcon
                  className="mt-1 mr-3 text-lg text-blue-800"
                  icon={faTwitter}
                />
              </Link>
              <Link to="https://www.facebook.com/">
                <FontAwesomeIcon
                  className="mt-1 mr-3 text-lg text-blue-800"
                  icon={faFacebook}
                />
              </Link>
              <Link to="https://wa.me/">
                <FontAwesomeIcon
                  className="mt-1 mr-3 text-lg text-red-800"
                  icon={faInstagram}
                />
              </Link>
              <Link to="https://www.instagram.com/">
                <FontAwesomeIcon
                  className="mt-1 mr-3 text-lg text-green-800"
                  icon={faWhatsapp}
                />
              </Link>
              <p className="mt-4">Download Our App</p>
              <div className="">
                <Link>
                  <img
                    src="/images/playstore.png"
                    alt="Google playstore picture"
                    className="inline h-8 w-16 md:w-20"
                  />
                </Link>
                <Link>
                  <img
                    src="/images/appstore.png"
                    alt="Appstore picture"
                    className="md:w-26 inline h-11 w-24"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <p className="p-3 text-center">
          Copyright &copy; {getYear()}. All right reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
