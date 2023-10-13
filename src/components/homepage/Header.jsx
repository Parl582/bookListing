import React, { useState } from "react";
import AddBookModel from "../modal/AddBookModel";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <div className="w-full py-2 top-0 sticky bg-white px-2 z-30 md:px-14 shadow-lg flex md:flex-row flex-col justify-between gap-2">
        <div className="w-full md:w-1/2 border rounded border-gray-600/30 ">
          <input
            type="search"
            placeholder="Search book by title"
            className="w-full  px-2 rounded py-2 "
          />
        </div>
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
