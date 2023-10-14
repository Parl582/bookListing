import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchBooks } from "../../redux/apiCall";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    e.preventDefault();
    if (!search) return;
    searchBooks(search, dispatch);
  };

  return (
    <form className="w-full md:w-1/2 border rounded border-gray-600/30 flex  items-center overflow-hidden">
      <input
        type="search"
        placeholder="Search book by title"
        className="w-full  px-2 rounded py-2 "
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="w-max px-1 bg-sky-500 py-2 text-white"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
