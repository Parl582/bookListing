import React, { useState } from "react";
import AddBookModel from "../modal/AddBookModel";
import SearchBar from "./SearchBar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-full py-2 top-0 sticky bg-white px-2 z-30 md:px-14 shadow-lg flex md:flex-row flex-col justify-between gap-2">
        <SearchBar />
        <button
          className="px-9 py-2 bg-sky-400 text-white shadow-lg text-sm rounded"
          onClick={handleOpen}
        >
          Add Book
        </button>
      </div>
      <AddBookModel open={open} handleOpen={handleOpen} />
    </>
  );
};

export default Header;
