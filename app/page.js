import Hero from '@/components/home/Hero';
import AdditionalLinks from '@components/home/AdditionalLinks';
import ImLinks from '@components/home/ImLinks';
import Marquee from '@components/home/Marquee';
import PrincipalBio from '@components/home/PrincipalBio';
import PrincipalMessage from '@components/home/PrincipalMessage';
import SebaBox from '@components/home/SebaBox';
import Technics from '@components/home/Technics';
import Terms from '@components/home/Terms';
import VicePriBio from '@components/home/VicePriBio';
import VicePriMes from '@components/home/VicePriMes';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <div className="container mx-auto px-4">
        <div className="my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
          <SebaBox />
          <PrincipalMessage />
          <PrincipalBio />
          <ImLinks />
          <VicePriMes />
          <VicePriBio />
          <AdditionalLinks />
          <Technics />
          <Terms />
        </div>
      </div>
    </>
  );
}
