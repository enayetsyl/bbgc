'use client';

import Header from '@/components/common/Header';

const teachersList = [
  {
    id: '00004174',
    name: 'MD. HABIBUR RAHMAN',
    email: 'habibtahlil@gmail.com',
    desgination: 'Principal',
    department: '',
    phone: '01711271258',
  },
  {
    id: '00004243',
    name: 'MD. TARIKUL ISLAM',
    email: 'tarikul_et@yahoo.com.au',
    desgination: 'VICE PRINCIPAL',
    department: '',
    phone: '01832898818',
  },
  {
    id: '00007718',
    name: 'DR. ABU YOUSUF MD. SHERUZZAMAN',
    email: 'sheruzzamana@gmail.com',
    desgination: 'PROFESSOR',
    department: 'Economics',
    phone: '01726003155',
  },
  {
    id: '00013593',
    name: 'DR.MD. ABDUL LATIF BHUIYAN',
    email: 'a.latifv@gmail.com',
    desgination: 'ASSOCIATE PROFESSOR',
    department: 'Islamic History and Culture',
    phone: '01712105678',
  },
  {
    id: '00004238',
    name: 'MD. SHAHIDUL ALAM',
    email: 'shahidulphy69@gmail.com',
    desgination: 'ASSOCIATE PROFESSOR',
    department: 'Philosophy',
    phone: '01712993370',
  },
  {
    id: '00004250',
    name: 'MD. KARIM IQBAL TAJOLEE',
    email: 'itajolee@gmail.com',
    desgination: 'ASSOCIATE PROFESSOR',
    department: 'Philosophy',
    phone: '01712051594',
  },
  {
    id: '00012117',
    name: 'PRASANTA KUMAR MRIDHA',
    email: 'prasantamridha@gmail.com',
    desgination: 'ASSOCIATE PROFESSOR',
    department: 'Bangla',
    phone: '01712268434',
  },
];

const staffList = [
  {
    id: '101332814',
    name: 'MD. MUFAKKARUR RAHMAN',
    email: 'tttrns81@gmail.com',
    desgination: 'Head Assistant',
    department: '',
    phone: '01712361839',
  },
  {
    id: '101337524',
    name: 'ASIM MALAKER',
    email: 'ashimmalaker01@gmail.com',
    desgination: 'OFFICE ASSISTANT (MLSS)',
    department: '',
    phone: '01822096132',
  },
];

const TeachersAndStaff = () => {
  return (
    <>
      <Header text="Teachers And Staff" />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="md:col-span-3">
              {/* teacher's list */}
              <div className="shadow-light p-4 md:p-8 rounded-md bg-white">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Teacher List</h3>
                  <h3 className="text-lg font-bold opacity-50">
                    16 September, 2023
                  </h3>
                </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b bg-white font-medium">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                id
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Name
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Designation
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Mobile
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Email
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Department
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {teachersList.map((teacher, i) => {
                              const {
                                id,
                                name,
                                email,
                                desgination,
                                department,
                                phone,
                              } = teacher;

                              return (
                                <tr
                                  class={`border-b bg-opacity-50 ${
                                    i % 2 === 0 ? 'bg-cyan-50' : 'bg-cyan-100'
                                  } `}
                                  key={i}
                                >
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    {id}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {name}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {desgination}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {phone}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {email}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {department}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* staff list */}
              <div className="shadow-light p-4 md:p-8 rounded-md bg-white mt-12">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Staff List</h3>
                  <h3 className="text-lg font-bold opacity-50">
                    16 September, 2023
                  </h3>
                </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                        <table className="min-w-full text-left text-sm font-light">
                          <thead className="border-b bg-white font-medium">
                            <tr>
                              <th scope="col" className="px-6 py-4">
                                id
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Name
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Designation
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Mobile
                              </th>
                              <th scope="col" className="px-6 py-4">
                                Email
                              </th>
                              {/* <th scope="col" className="px-6 py-4">
                                Department
                              </th> */}
                            </tr>
                          </thead>
                          <tbody>
                            {staffList.map((teacher, i) => {
                              const {
                                id,
                                name,
                                email,
                                desgination,
                                department,
                                phone,
                              } = teacher;

                              return (
                                <tr
                                  class={`border-b bg-opacity-50 ${
                                    i % 2 === 0 ? 'bg-emerald-50' : 'bg-emerald-100'
                                  } `}
                                  key={i}
                                >
                                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                                    {id}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {name}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {desgination}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {phone}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {email}
                                  </td>
                                  <td className="whitespace-nowrap px-6 py-4">
                                    {department}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeachersAndStaff;
