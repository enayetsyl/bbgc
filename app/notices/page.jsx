'use client';

import Header from '@/components/common/Header';
import Link from 'next/link';
import { FaDownload, FaSearch } from 'react-icons/fa';

const notices = [
  {
    title: 'NOC for Sherujjaman Sir',
    date: 'January 23, 2023',
    link: 'http://www.bbgc.edu.bd/files/Sherujjamansir.pdf',
    file: '',
  },
  {
    title: 'NOC for Sherujjaman Sir',
    date: 'January 23, 2023',
    link: 'http://www.bbgc.edu.bd/files/Sherujjamansir.pdf',
    file: '',
  },
];

const Notices = () => {
  return (
    <>
      <Header text="Notices" />
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="md:col-span-3">
              <div className="shadow-light p-4 md:p-8 rounded-md bg-white">
                {/* search bar */}
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-4">
                  <h5 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    Recent Notices
                  </h5>
                  <form action="">
                    <div className="relative">
                      <input
                        type="text"
                        className="input-with-shadow !py-3 !pr-12 !w-[250px]"
                        placeholder="Search"
                      />
                      <button
                        type="submit"
                        className="absolute top-1/2 -translate-y-1/2 right-3"
                      >
                        <FaSearch />
                      </button>
                    </div>
                  </form>
                </div>

                {/* notices */}
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b bg-white font-medium">
                    <tr>
                      <th scope="col" className="px-2 sm:px-6 py-4">
                        Title
                      </th>
                      <th scope="col" className="px-2 sm:px-6 py-4">
                        Date
                      </th>
                      <th scope="col" className="px-2 sm:px-6 py-4">
                        Download
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {notices.map((notice, i) => {
                      const { title, date, link, file } = notice;

                      return (
                        <tr
                          class={`border-b bg-opacity-50 ${
                            i % 2 === 0 ? 'bg-pink-50' : 'bg-pink-200'
                          } `}
                          key={i}
                        >
                          <td className="px-2 sm:px-6 py-4 font-medium truncate max-w-[100px] sm:max-w-full sm:whitespace-normal">
                            {title}
                          </td>
                          <td className="sm:whitespace-nowrap px-2 sm:px-6 py-4">
                            {date}
                          </td>
                          <td className="sm:whitespace-nowrap px-2 sm:px-6 py-4">
                            <Link
                              href={file}
                              type="download"
                              className="text-primary "
                            >
                              <FaDownload />
                            </Link>
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
    </>
  );
};

export default Notices;
