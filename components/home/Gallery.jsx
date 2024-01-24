import Image from 'next/image';
import SectionHeadingText from '../common/SectionHeadingText';
import imageOne from '../../public/assets/one.jpg';
import imageTwo from '../../public/assets/two.jpg';
import imageFour from '../../public/assets/four.jpg';
import imageFive from '../../public/assets/five.jpg';
import imageSix from '../../public/assets/six.jpg';
import imageSeven from '../../public/assets/seven.jpg';

const galleryData = [
  imageOne,
  imageTwo,
  imageFour,
  imageFive,
  imageSeven,
  imageSix,
];

const Gallery = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <SectionHeadingText text="Our Photo Gallery" />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-6 md:mt-12">
          {galleryData.map((item, i) => (
            <div key={i}>
              <Image
                src={item}
                alt=""
                className="w-full h-full rounded-md black-shadow"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
