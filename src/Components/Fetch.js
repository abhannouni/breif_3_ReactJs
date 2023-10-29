import { useState } from "react";

export default function Fetchdata({ data, remove }) {
  const [index, setIndex] = useState(0);

  const tableRows = [];
  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    const row = (
      <tr key={person.id}>
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
          {person.id}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.petName}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.ownerName}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.aptNotes}
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          {person.aptDate}
        </td>
        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
          <button
            className="text-indigo-600 hover:text-indigo-900"
            onClick={() => remove(i)}
          >
            Delete<span className="sr-only">, {person.id}</span>
          </button>
        </td>
      </tr>
    );
    tableRows.push(row);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      petName
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      ownerName
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      aptNotes
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      aptDate
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableRows}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
