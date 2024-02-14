'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/logo.png';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';

const navItems = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About Us',
    subMenu: [
      {
        text: 'History Bangla',
        link: '/history-bangla',
      },
      {
        text: 'History English',
        link: '/history-english',
      },
      {
        text: 'Citizen Charter',
        link: '/citizen-charter',
      },
      {
        text: 'Vision & Mission',
        link: '/vision-and-mission',
      },
    ],
  },
  {
    text: 'Academic',
    subMenu: [
      {
        text: `Principal's Information`,
        link: '/principals-information',
      },
      {
        text: `Principal's Information`,
        link: '/principal',
      },
      {
        text: `Vice Principal's Information`,
        link: '/vice-principal',
      },
      {
        text: `Teachers Information`,
        link: '/teachers',
      },
      {
        text: `Holiday Calendar`,
        link: '/holiday-calendar',
      },
      {
        text: `Academic Calendar`,
        link: '/academic-calendar',
      },
      {
        text: `Class Routine`,
        link: '/class-routine',
      },
      {
        text: `3rd & 4th Class Employee Information`,
        link: '/employees',
      },
    ],
  },
  {
    text: 'Department',
    subMenu: [
      {
        text: `Department's History`,
        link: '/departments-history',
      },
      {
        text: `Teachers Info`,
        link: '/teachers',
      },
      {
        text: `Students Info`,
        link: '/students-info',
      },
      {
        text: `Notice`,
        link: '/notice',
      },
      {
        text: `Events`,
        link: '/events',
      },
      {
        text: `Results`,
        link: '/results',
      },
    ],
  },
  {
    text: 'Notices',
    subMenu: [
      {
        text: `Recent Notices`,
        link: '/recent-notices',
      },
      {
        text: `Office Order`,
        link: '/office-order',
      },
      {
        text: `Admission Notice`,
        link: '/admission-notice',
      },
      {
        text: `Exam Notice`,
        link: '/exam-notice',
      },
      {
        text: `NOC`,
        link: '/noc',
      },
    ],
  },
  {
    text: 'Exams',
    subMenu: [
      {
        text: `Exam Notices`,
        link: '/exam-notices',
      },
      {
        text: `Exam Routine`,
        link: '/exam-routine',
      },
      {
        text: `Syllabus`,
        link: '/syllabus',
      },
    ],
  },
  {
    text: 'Admission',
    subMenu: [
      {
        text: `Admission Notice`,
        link: '/admission-notice',
      },
      {
        text: `Admission Info`,
        link: '/admission-info',
      },
    ],
  },
  {
    text: 'Gallery',
    subMenu: [
      {
        text: `Image Gallery`,
        link: '/image-gallery',
      },
      {
        text: `Video Gallery`,
        link: '/video-gallery',
      },
    ],
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeNav, setActiveNav] = useState(false);
  const [subMenu, setSubMenu] = useState(1);

  return (
    <>
      <div className="relative bg-primary bg-opacity-10 shadow-md py-2">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 flex-col md:flex-row items-center">
            <Image src={logo} alt="logo" height={55} width={55} />
            <h4 className="flex-grow text-center font-bold text-xl">
              Beanibazar Govt. College (বিয়ানিবাজার সরকারি কলেজ)
            </h4>
          </div>
        </div>
      </div>
      <div className="relative bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-y-2 justify-between items-center">
            <div
              className="relative w-full flex flex-col gap-y-1.5 justify-center items-center md:hidden border border-black rounded py-2 cursor-pointer"
              onClick={() => setActiveNav((prev) => !prev)}
            >
              <span className="block w-11 h-0.5 bg-black" />
              <span className="block w-11 h-0.5 bg-black" />
              <span className="block w-11 h-0.5 bg-black" />
            </div>
            {/* nav */}
            <ul
              className={`flex flex-col md:flex-row items-center justify-between w-full gap-6 py-4 md:py-0 ${
                activeNav ? 'flex' : 'hidden md:flex'
              }`}
            >
              {navItems.map((item, i) => (
                <li
                  className={`relative flex items-center gap-2 text-base font-medium hover:scale-105 z-[1000] ${
                    pathname === item.link && 'text-primary'
                  }`}
                  key={i}
                >
                  <Link href={item.link ? item.link : ''}>{item.text}</Link>
                  {item.subMenu && <FaChevronDown />}
                  {item.subMenu && subMenu === i && (
                    <ul className="absolute top-[111%] flex flex-col gap-y-2 right-0 shadow-light bg-white p-4 md:p-6 min-w-[250px]">
                      {item.subMenu.map((sub, j) => {
                        return (
                          <li
                            className={`relative text-base font-medium hover:text-primary ${
                              pathname === sub.link && 'text-primary'
                            }`}
                            key={j}
                          >
                            <Link href={sub.link ? sub.link : ''}>
                              {sub.text}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
