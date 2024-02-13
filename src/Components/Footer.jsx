import React from "react";
import { SiFacebook } from "react-icons/si";
import { FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className=" ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col gap-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png"
              alt="Logo"
              className="w-20"
            />
            <div className="text-gray-500 flex gap-8">
              <SiFacebook size={22} />
              <FaTwitter size={22} />
              <RiInstagramFill size={22} />
              <IoLogoYoutube size={22} />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">
              site terms and policies
            </h2>
            <ul className="text-sm">
              <li>
                <a href="#about">Community standards</a>
              </li>
              <li>
                <a href="#services">Privacy policy</a>
              </li>
              <li>
                <a href="#contact">Terms</a>
              </li>
              <li>
                <a href="#contact">Cookies policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Meta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Media gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Brand resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  For Investors
                </a>
              </li>
              {/* Add more links as needed */}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-2">Smart glasses</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shop Ray-Ban Meta smart glasses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Ray-Ban Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Privacy information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Supported countries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Meta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Media gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Brand resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  For Investors
                </a>
              </li>
              {/* Add more social media icons as needed */}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">About us</h2>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Meta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Media gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Brand resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  For Investors
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-300">
                  About Meta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Media gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Brand resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  For Investors
                </a>
              </li>
              {/* Add more social media icons as needed */}
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Meta.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
