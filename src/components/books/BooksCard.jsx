import { useState } from "react";
import EditModal from "../modal/EditModal";

const BooksCard = ({ elm }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const handleEdit = (id) => {
    handleOpen();
  };

  return (
    <>
      <div className="w-1/2 md:p-2 md:w-1/4 lg:w-1/6 p-1 md:h-80 h-[300px] lg:h-96  ">
        <div
          className="w-full relative h-full bg-green-400 cursor-pointer border hover:shadow-lg duration-200 transition-all rounded
      "
        >
          <div className="absolute right-1 top-2 max-w-1/2 truncate text-sm flex gap-2">
            Page : {elm.pages}
            <button
              onClick={() => handleEdit(elm.id)}
              className="bg-sky-500 px-1 cursor-pointer rounded text-white text-xs"
            >
              edit
            </button>
          </div>
          <div className="absolute left-1 top-2 max-w-1/2 truncate text-sm">
            Year : {elm.year}
          </div>
          <div className="w-full absolute bottom-1 px-2 space-y-1">
            <h1 className="w-full  font-semibold text-xl truncate">
              {elm?.title}
            </h1>
            <h2 className="w-full  truncate"> {elm?.author} </h2>
            <div className="w-full flex gap-3 text-sm ">
              <span> {elm.country} </span>
              <span> {elm.language} </span>
            </div>
          </div>
        </div>
      </div>

      <EditModal open={open} handleOpen={handleOpen} data={elm} />
    </>
  );
};

export default BooksCard;
