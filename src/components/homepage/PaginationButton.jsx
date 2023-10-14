import React, { useEffect } from "react";
import { NextPage, PrevPage } from "../../redux/bookSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaginationButton = () => {
  const route = useNavigate();
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.book.books);
  const currentPageNo = useSelector((state) => state.book.currentPage);

  const Next = () => {
    dispatch(NextPage());
  };
  const Prev = () => {
    dispatch(PrevPage());
  };

  return (
    <div className="w-full py-3 flex justify-end lg:px-14 px-3 md:px-11">
      <button
        className="border px-2 py-3 cursor-pointer bg-sky-500 text-white"
        onClick={Prev}
      >
        Prev
      </button>
      <div className="flex gap-2 items-center mx-2">
        <span> {pagination?.pagination?.currentPage} </span>
        OF
        <span> {pagination?.pagination?.totalPages} </span>
      </div>
      <button
        className="border px-2 py-3 cursor-pointer bg-sky-500 text-white"
        onClick={Next}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButton;
