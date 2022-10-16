import React from "react"

const ComparisionTable = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Feature
            </th>
            <th scope="col" className="py-3 px-6">
              Bruno
            </th>
            <th scope="col" className="py-3 px-6">
              Postman
            </th>
            <th scope="col" className="py-3 px-6">
              Insomnia
            </th>
            <th scope="col" className="py-3 px-6">
              Hoppscotch
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Opensource Client
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Opensource Sync Server
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Local (Filesystem) Collections
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Chrome Extension
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Run using Docker
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Desktop App
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Run in Browser
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
          </tr>
          <tr className="bg-white dark:bg-gray-800">
            <td scope="row" className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Multi Tab Requests
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✔️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
            <td className="py-2 px-6">
              ✖️
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  );

}

export default ComparisionTable;
