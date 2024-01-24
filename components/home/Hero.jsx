'use client';

import Image from 'next/image';
import one from '../../public/assets/one.jpg';
import Lottie, { useLottie } from 'lottie-react';
import ScrollDown from '../common/ScrollDown.json';

const Hero = () => {
  const options = {
    animationData: ScrollDown,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <header className="relative min-h-[50vh] md:min-h-[80vh] py-12 md:py-20 flex justify-center items-center z-10">
      <Image
        src={one}
        alt="one"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />
      <div className="bg-gradient-to-r from-[#ec489957] via-[#ef44445e] to-[#eab308ab] absolute inset-0 -z-10" />
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center p-12 bg-white bg-opacity-40 backdrop-blur-md rounded-md max-w-[700px] mx-auto">
          <h4 className="text-3xl font-bold text-center text-white !leading-[1.3]">
            Welcome to <br />
            <span className="text-4xl !leading-[1.36]">
              <span className="text-primary text-5xl md:text-7xl">
                Beanibazar
              </span>
              <br /> Govt. College
            </span>
          </h4>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-t-md px-4">
        {View}
      </div>
    </header>
  );
};

export default Hero;