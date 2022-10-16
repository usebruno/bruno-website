import React from "react"

const ComparisionTable = () => {
  return (
    <div class="overflow-x-auto relative">
      <table class="w-full text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Feature
            </th>
            <th scope="col" class="py-3 px-6">
              Bruno
            </th>
            <th scope="col" class="py-3 px-6">
              Postman
            </th>
            <th scope="col" class="py-3 px-6">
              Insomnia
            </th>
            <th scope="col" class="py-3 px-6">
              Hoppscotch
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Opensource Client
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Local (Filesystem) Collections
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Chrome Extension
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Run using Docker
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Desktop App
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Opensource Sync Server
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Run in Browser
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <td scope="row" class="py-2 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              Multi Tab Requests
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✔️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
            <td class="py-2 px-6">
              ✖️
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  );

}

export default ComparisionTable;
