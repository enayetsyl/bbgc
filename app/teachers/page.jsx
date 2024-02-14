import Image from 'next/image';
import { teachersList } from '@data';
import principalImage from '@/public/assets/teachers/principal.jpeg';
import vicePrincipalImage from '@/public/assets/teachers/vice-principal.jpeg';
import userImage from '@/public/assets/teachers/user.png';

const Teachers = () => {
  const checkDep = (item, dep) => {
    return dep === item.dep ? item : null;
  };

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div>
          <h4 className="text-3xl">{`Teachers's Information`}</h4>

          <div className="mt-4 mb-8 bg-[#d3d3d3] w-full h-[1px]" />

          {/* principal & vice principal */}
          <div className="bg-white shadow-light rounded my-6 overflow-hidden">
            <div className="bg-primary text-white p-3">
              <h6 className="text-xl md:text-2xl font-semibold">
                Principal & Vice Principal
              </h6>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
              {/* principal */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-12 border rounded">
                <Image
                  src={principalImage}
                  alt="principal"
                  className="w-full h-auto object-cover rounded max-w-[200px] border"
                />

                <div className="text-center mt-4">
                  <h5 className="text-xl font-bold text-primary">
                    প্রফেসর মোঃ হাবিবুর রহমান
                  </h5>
                  <h5 className="text-sm font-bold opacity-75 my-2">অধ্যক্ষ</h5>
                  <h5 className="text-sm font-bold opacity-75">
                    Joining Date: 13 Sep 2021
                  </h5>
                </div>
              </div>
              {/* vice principal */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-12 border rounded">
                <Image
                  src={vicePrincipalImage}
                  alt="vice principal"
                  className="w-full h-auto object-cover rounded max-w-[200px] border"
                />

                <div className="text-center mt-4">
                  <h5 className="text-xl font-bold text-primary">
                    মোঃ তারিকুল ইসলাম
                  </h5>
                  <h5 className="text-sm font-bold opacity-75 my-2">
                    উপাধ্যক্ষ
                  </h5>
                  <h5 className="text-sm font-bold opacity-75">
                    Joining Date: 13 Sep 2021
                  </h5>
                </div>
              </div>
            </div>
          </div>

          {/* bangla */}
          <div className="bg-white shadow-light rounded my-6 overflow-hidden">
            <div className="bg-primary text-white p-3">
              <h6 className="text-xl md:text-2xl font-semibold">
                Department Of Bangla
              </h6>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {teachersList
                .filter((item) => checkDep(item, 'bangla'))
                .map((item, i) => {
                  return (
                    <div
                      className="bg-white shadow-light p-4 rounded-md overflow-hidden"
                      key={i}
                    >
                      <Image
                        src={item?.image ? item.image : userImage}
                        alt={item.name}
                        className="w-full h-auto max-h-[300px] object-cover rounded-md"
                      />

                      <div className="text-center mt-4">
                        <h5 className="text-xl font-bold text-primary">
                          {item.name}
                        </h5>
                        <h5 className="text-sm font-bold opacity-75 my-2">
                          {item.designation}
                        </h5>
                        <h6 className="font-medium opacity-75 italic my-2">
                          {item.mobile}
                        </h6>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* english */}
          <div className="bg-white shadow-light rounded my-6 overflow-hidden">
            <div className="bg-primary text-white p-3">
              <h6 className="text-xl md:text-2xl font-semibold">
                Department Of English
              </h6>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {teachersList
                .filter((item) => checkDep(item, 'english'))
                .map((item, i) => {
                  return (
                    <div
                      className="bg-white shadow-light p-4 rounded-md overflow-hidden"
                      key={i}
                    >
                      <Image
                        src={item?.image ? item.image : userImage}
                        alt={item.name}
                        className="w-full h-auto max-h-[300px] object-cover rounded-md"
                      />

                      <div className="text-center mt-4">
                        <h5 className="text-xl font-bold text-primary">
                          {item.name}
                        </h5>
                        <h5 className="text-sm font-bold opacity-75 my-2">
                          {item.designation}
                        </h5>
                        <h6 className="font-medium opacity-75 italic my-2">
                          {item.mobile}
                        </h6>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Economics */}
          <div className="bg-white shadow-light rounded my-6 overflow-hidden">
            <div className="bg-primary text-white p-3">
              <h6 className="text-xl md:text-2xl font-semibold">
                Department Of Economics
              </h6>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {teachersList
                .filter((item) => checkDep(item, 'economics'))
                .map((item, i) => {
                  return (
                    <div
                      className="bg-white shadow-light p-4 rounded-md overflow-hidden"
                      key={i}
                    >
                      <Image
                        src={item?.image ? item.image : userImage}
                        alt={item.name}
                        className="w-full h-auto max-h-[300px] object-cover rounded-md"
                      />

                      <div className="text-center mt-4">
                        <h5 className="text-xl font-bold text-primary">
                          {item.name}
                        </h5>
                        <h5 className="text-sm font-bold opacity-75 my-2">
                          {item.designation}
                        </h5>
                        <h6 className="font-medium opacity-75 italic my-2">
                          {item.mobile}
                        </h6>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
