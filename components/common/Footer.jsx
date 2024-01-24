import Link from 'next/link';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitterSquare,
} from 'react-icons/fa';

import logo from '../../public/assets/logo.png';
import Image from 'next/image';

const details = [
  {
    logo: <FaMapMarkerAlt />,
    text: 'R5C4+HRJ, TNT Rd, Beanibazar',
  },
  {
    logo: <FaPhoneAlt />,
    text: ' 01734-080676',
  },
  {
    logo: <FaEnvelope />,
    text: 'info@gmail.com',
  },
];

const socialData = [
  {
    logo: <FaFacebookSquare size={35} />,
    link: `/`,
  },
  {
    logo: <FaInstagramSquare size={35} />,
    link: `/`,
  },
  {
    logo: <FaTwitterSquare size={35} />,
    link: `/`,
  },
];

const resourcesData = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/about-us',
  },
  {
    text: 'Admission',
    link: '/admission',
  },
  {
    text: 'Notices',
    link: '/notices',
  },
  {
    text: 'Questions',
    link: '/questions',
  },
  {
    text: 'Contact Us',
    link: '/contact-us',
  },
];

const Footer = () => {
  return (
    <div className="bg-[#F7F7F7] pt-12 md:pt-20">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-12">
          <div className="w-full md:w-1/3 flex flex-col justify-center text-center md:text-start items-center md:items-start">
            <div className="mx-auto md:mx-0 md:-mt-4">
              <Image src={logo} alt="" className="max-w-full h-auto" />
            </div>
            <p className="opacity-80 xl:pr-20 mt-5">
              We sell perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
            {/* details */}
            <ul className="flex flex-col gap-y-3 my-10">
              {details.map((detail, i) => (
                <li className="flex items-center gap-x-2" key={i}>
                  <div className="text-primary">{detail.logo}</div>
                  <p className="uppercase opacity-80">{detail.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between gap-8  md:pl-32">
            {/* resources */}
            <div>
              <h4 className="text-xl font-semibold text-primary">Resources</h4>
              <div className="h-[3px] w-32 bg-primary mt-3.5 mb-7" />
              <ul className="flex flex-col gap-y-4 ">
                {resourcesData.map((item, i) => (
                  <li
                    className="text-lg font-medium hover:text-primary"
                    key={i}
                  >
                    <Link href={item.link}>{item.text}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex flex-col gap-y-4 ">
                <h4 className="text-xl font-semibold text-primary">
                  Opening Hours
                </h4>
                <div className="h-[3px] w-32 bg-primary -mt-0.5 mb-2" />
                <div className="flex justify-between gap-4">
                  <p className="text-lg font-medium">Sun - Wed</p>
                  <p className="text-lg font-medium text-end">
                    9.00 AM - 4.00 PM
                  </p>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="text-lg font-medium">Thus</p>
                  <p className="text-lg font-medium text-end">
                    9.00 AM - 2.00PM
                  </p>
                </div>
                <div className="flex justify-between gap-4">
                  <p className="text-lg font-medium">Friday,Saturday</p>
                  <p className="text-lg font-medium text-end">Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© Copyright 2024, All Rights Reserved</p>
          {/* social */}
          <ul className="flex items-center gap-x-4">
            {socialData.map((social, i) => (
              <li key={i}>
                <Link href={social.link}>
                  <div className="rounded-md text-gray-700 hover:text-primary hover:-translate-y-2 duration-500">
                    {social.logo}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
