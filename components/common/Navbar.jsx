'use client';

import logo from '../../public/assets/logo.png';
import { FaTimes } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About Us',
    link: '/about-us',
  },
  {
    text: 'Classes',
    link: '/classes',
  },
  {
    text: 'Notices',
    link: '/notices',
  },
  {
    text: 'Teachers & Staff',
    link: 'teachers-and-staff',
  },
  {
    text: 'Admission',
    link: 'admission',
  },
  {
    text: 'Questions',
    link: 'questions',
  },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [userDash, setUserDash] = useState(false);

  // closing mobile nav if clicked on outside of the box
  const handleOutsideClick = (event) => {
    const mobileNav = document.querySelector('.mobileNav');
    if (mobileNav && !mobileNav.contains(event.target)) {
      setActive(false);
    }
  };
  useEffect(() => {
    if (active) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [active]);

  return (
    <div className="relative bg-white shadow-md py-2">
      {userDash && (
        <div
          className="absolute inset-0 h-screen w-screen bg-black bg-opacity-0 z-[100] overflow-hidden"
          onClick={() => setUserDash(false)}
        />
      )}
      <div className="container mx-auto px-4">
        <div className="hidden lg:flex justify-between items-center">
          {/* logo */}
          <div>
            <Image
              src={logo}
              alt="logo"
              className="max-w-[120px] h-auto object-cover"
            />
          </div>

          {/* nav */}
          <ul className="flex items-center gap-x-6">
            {navItems.map((item, i) => (
              <li className="text-base font-medium hover:text-primary" key={i}>
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile navigation */}
        <div className=" lg:hidden flex justify-between items-center gap-x-4">
          <div>
            <Image src={logo} alt="logo" />
          </div>
          <div
            className="cursor-pointer hover:text-primary"
            onClick={() => setActive((prev) => !prev)}
          >
            <GiHamburgerMenu size={30} />
          </div>
        </div>
      </div>

      <div
        className={`block lg:hidden mobileNav absolute w-full sm:w-1/2 h-screen right-0 bg-gray-100 z-[11111] duration-500 ${
          active ? 'translate-x-0' : ' translate-x-full'
        }`}
      >
        <div
          className="absolute top-5 right-5 cursor-pointer hover:text-primary"
          onClick={() => setActive(false)}
        >
          <FaTimes size={30} />
        </div>
        <ul className="flex flex-col items-center gap-y-6 mt-12">
          {navItems.map((item, i) => (
            <li
              className="text-xl font-medium hover:text-primary"
              key={i}
              onClick={() => setActive(false)}
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
