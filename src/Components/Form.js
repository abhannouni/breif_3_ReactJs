import { useState, useEffect } from "react";

export default function Example({ addToArr, Arrlength }) {
  const [length, setLength] = useState(Arrlength);

  const [form, setForm] = useState({
    id: length,
    petName: "",
    ownerName: "",
    aptNotes: "",
    aptDate: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
      id: length,
    });
  };

  useEffect(() => {
    setForm({
      ...form,
      id: length,
    });
  }, [length]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLength((prevLength) => prevLength + 1);
    setForm((prevForm) => ({
      ...prevForm,
      id: length,
    }));
    addToArr(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200 px-4 sm:px-6 lg:px-8 bor m-9"
    >
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Info
            </h3>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                Pet name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="petName"
                  id="petName"
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-700 rounded "
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Owner name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="ownerName"
                  id="ownerName"
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-700 rounded "
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Apt note
              </label>
              <textarea
                id="aptNote"
                name="aptNotes"
                rows={3}
                onChange={handleChange}
                className="w-full p-3 bg-transparent border border-gray-700 rounded"
                defaultValue={""}
              />
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Apt date
              </label>
              <div className="mt-1">
                <input
                  id="aptDate"
                  name="aptDate"
                  type="date"
                  onChange={handleChange}
                  className="w-full p-3 bg-transparent border border-gray-700 rounded "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
