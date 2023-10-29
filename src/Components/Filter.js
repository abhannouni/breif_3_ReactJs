import { useEffect, useState } from "react";

export default function Filter({ searchFonct }) {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    searchFonct(search);
  }, [search]);

  return (
    <div className="">
      <div className="">
        <input
          className="w-full p-3 bg-transparent border border-gray-700 rounded"
          placeholder="Serach"
          type="text"
          name="search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
