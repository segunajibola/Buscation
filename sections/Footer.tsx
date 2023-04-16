"use client";

import React from "react";
import Link from 'next/link'
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  let getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="bg-gray-400 dark:bg-gray-900 dark:text-gray-400">
      <footer className="w-[80%] mx-auto">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 space-y-4 px-2 md:grid-cols-4">
          <div>
            <h5 className="mt-4 text-lg font-semibold dark:text-gray-200">
              Company
            </h5>
            <p>
              <Link href="/">About</Link>
            </p>
            <p>
              <Link href="/">Awards</Link>
            </p>
            <p>
              <Link href="/">Contact us</Link>
            </p>
            <p>
              <Link href="/">Bus Terminals</Link>
            </p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
              Exerience
            </h5>
            <p>
              <Link href="/">Tour Moments</Link>
            </p>
            <p>
              <Link href="/">Academy</Link>
            </p>
            <p>
              <Link href="/">Safety</Link>
            </p>
            <p>
              <Link href="/">FAQs</Link>
            </p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
              Terms
            </h5>
            <p>
              <Link href="/">Privacy Policy</Link>
            </p>
            <p>
              <Link href="/">Terms & Condition</Link>
            </p>
          </div>
          <div>
            <h5 className="mb-1 text-lg font-semibold dark:text-gray-200">
              Connect
            </h5>
            <Link href="https://www.twitter.com/">
              <FaWhatsapp
                className="mt-1 mr-3 text-lg text-blue-800"
                size={24}
              />
            </Link>
            <Link href="https://www.facebook.com/">
              <FaWhatsapp
                className="mt-1 mr-3 text-lg text-blue-800"
                size={24}
              />
            </Link>
            <Link href="https://wa.me/">
              <FaWhatsapp
                className="mt-1 mr-3 text-lg text-red-800"
                size={24}
              />
            </Link>
            <Link href="https://www.instagram.com/">
              <FaWhatsapp
                className="mt-1 mr-3 text-lg text-green-800"
                size={24}
              />
            </Link>
            <p className="mt-4">Download Our App</p>
            <div className="">
              <Link href="/">
                <img
                  src="/playstore.png"
                  alt="Google playstore"
                  className="inline h-8 w-16 md:w-20"
                />
              </Link>
              <Link href="/">
                <img
                  src="/appstore.png"
                  alt="Appstore"
                  className="md:w-26 inline h-11 w-24"
                />
              </Link>
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
