import Link from 'next/link';
import SectionHeadingText from '../common/SectionHeadingText';
import Button from '../common/Button';

const AboutUs = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <SectionHeadingText text="About Us" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="md:col-span-2">
            <div className="shadow-light p-4 md:p-8 rounded-md bg-white">
              <h5 className="text-3xl md:text-4xl font-semibold text-gray-700  mb-4">
                Introduction
              </h5>
              <p className="opacity-60 cap !leading-[1.75]">
                <span className="text-primary font-bold text-3xl">B</span>
                eanibazar College was established as the first college at
                upazilla level in Sylhet Division in 1968. Promathnath Das, a
                renowned philanthropist of Beanibazar, along with some
                humanitarian community leaders and scholars founded this
                college. Later it was nationalized and renamed Beanibazar Govt.
                College in 1988. In course of time, it turned into an honours
                and masters teaching college providing opportunities for more
                ten thousand students to get educated from higher secondary
                level to masters level. At present it is one of leading
                educational institutions in terms of academic and
                infrastructural facilities having two (four storeyed) spacious
                academic buildings, a (ten storeyed) academic cum administrative
                building (under construction), a (three storeyed) science
                building, a (two storeyed) reaches dormitory, an enriched
                library and a well-equipped computer lab. We have 48 posts for
                teachers including the posts of principal and vice-principal in
                our college. Despite being situated 52 kilometers away from
                divisional Headquarters, this college is contributing greatly to
                the intellectual enrichment of this region as well as the whole
                country.
              </p>

              <h5 className="text-3xl uppercase font-semibold text-gray-700 mt-8 mb-4">
                QUESTION FOR INTER FIRST YEAR
              </h5>
              <h6 className="text-xl font-medium text-primary mb-3">
                Find your question everyday morning 9:30AM
              </h6>
              <p className="text-xl font-bold leading-[3]">নিয়মাবলিঃ</p>
              <ul className="flex flex-col gap-y-2">
                <li>
                  * শিক্ষার্থী প্রশ্নপত্র পাওয়ার পর নিজের নাম, বিভাগ, রোল নং,
                  বিষয়ের নাম এবং তারিখ উত্তরপত্রের উপরাংশে লিখবে।
                </li>
                <li>* পরিক্ষা ১০ টায় শুরু করে ১২.৩০ পর্যন্ত চলবে।</li>
                <li>
                  * পরিক্ষা শেষে অভিভাবকগণ স্বাক্ষর দিয়ে উত্তরপত্র নিজ দায়িত্বে
                  রাখবেন।
                </li>
                <li>
                  * প্রশ্নপত্র পাওয়ার সাথে সাথে (০১৭১৮২৮৩২০২, ০১৭৩৭৬৬৯০১১,
                  ০১৭১৭৪৯৭৫৮৯) এই নাম্বার গুলিতে মিসডকল দিয়ে উপস্থিতি নিশ্চিত
                  করতে হবে।
                </li>
              </ul>
              <p className="text-lg text-primary italic leading-[3] mb-6">
                বিঃদ্রঃ যে কোন প্রয়োজনে উপরের নাম্বার গুলিতে যোগাযোগ করবেন।
              </p>
              <div>
                <Button link={`/`} text="View All Questions" type="link" />
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            {' '}
            <div className="shadow-light p-4 md:p-8 rounded-md bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
