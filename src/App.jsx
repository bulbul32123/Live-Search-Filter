import React, { useState } from 'react'
import { userData } from './utils/data'

export default function App() {
  const [increment, setIncrement] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');
  const incrementData = () => {
    setIncrement((prev) => prev + 10)
  }
  return (
    <>
      <div className="relative shadow-md h-full flex pt-20 pb-40 bg-gray-900 justify-center items-center flex-col">
        <div className="pb-4 sticky top-12">
          <label for="table-search" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 w-full flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="table-search" onChange={(e) => setSearchQuery(e.target.value)} className="outline-none border-none block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for User Data" />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
              </th>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                E-mail
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.slice(0, increment).filter((item) => (
              searchQuery.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(searchQuery)
            )).map((data) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" key={data.id}>
                <td className="w-4 p-4">
                </td>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {data?.first_name} {data?.last_name}
                </th>
                <td className="px-6 py-4">
                  {data.email}
                </td>
                <td className="px-6 py-4">
                  {data.phone}
                </td>
                <td className="px-6 py-4">
                  {data.gender}
                </td>
                <td className="px-6 py-4">
                  {data.address}
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
        <button className='py-2 px-4 bg-green-500 rounded-md text-sm mt-5' onClick={() => incrementData()}>Load More </button>
      </div>

    </>
  )
}
