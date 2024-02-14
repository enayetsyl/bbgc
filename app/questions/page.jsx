import Header from '@/components/common/Header';
import ecoOne from '@/public/assets/economics1.jpg';
import ecoTwo from '@/public/assets/economics2.jpg';
import Image from 'next/image';

const Questions = () => {
  return (
    <>
      <Header text="Questions" />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="shadow-light p-4 md:p-8 rounded-md bg-white">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold">Economics</h3>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-start gap-4 w-full max-w-[1100px] mx-auto">
              <div className="w-full">
                <Image
                  src={ecoOne}
                  alt="question"
                  className="max-w-full w-full h-auto object-cover"
                />
              </div>
              <div className="w-full">
                <Image
                  src={ecoTwo}
                  alt="question"
                  className="max-w-full w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
