import React, { useCallback, useEffect, useState } from "react";
import Fetchdata from "./Components/Fetch.js";
import Example from "./Components/Form.js";
import Filter from "./Components/Filter.js";
import Dropdown from "./Components/Dropdown.js";
import data from "./Public/data.json";

function App() {
  const [arr, setArr] = useState(data);
  const [arrSearch, setArrSearch] = useState(data);
  const [sortField, setSortField] = useState("aptDate");
  const [sortOrder, setSortOrder] = useState("asc");

  const addToArr = useCallback(
    (newData) => {
      setArrSearch((prevArrSearch) => [...prevArrSearch, newData]);
      setArr(arrSearch);
    },
    [arrSearch],
  );

  const remove = (index) => {
    if (index > -1) {
      const updatedArrSearch = [...arrSearch];
      updatedArrSearch.splice(index, 1);
      setArrSearch(updatedArrSearch);
    }
  };

  const sortData = (field, order) => {
    const sortedData = [...arrSearch].sort((a, b) => {
      const valueA = a[field];
      const valueB = b[field];

      if (valueA < valueB) return order === "asc" ? -1 : 1;
      if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    });

    setArrSearch(sortedData);
  };

  const handleSortClick = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
    sortData(field, sortOrder);
  };

  const searchFonct = (newData) => {
    if (newData !== "") {
      const filteredData = arr.filter((item) => item.petName.includes(newData));
      setArrSearch(filteredData);
    } else {
      setArrSearch(arr);
    }
  };

  return (
    <>
      <div className="App">
        {/* <Form addToArr={addToArr} Arrlength={arr.length} /> */}
        <div className="border-solid rounded border-2 m-5">
          <Example addToArr={addToArr} Arrlength={arr.length} />
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center	m-5">
              <div></div>
              <Filter searchFonct={searchFonct} />
              <Dropdown handleSortClick={handleSortClick} />
            </div>
          </div>
        </div>
        <Fetchdata data={arrSearch} remove={remove} />
      </div>
    </>
  );
}

export default App;
