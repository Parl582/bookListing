import BooksCard from "./BooksCard";

import Loading from "./Loading";
import Error from "./Error";

import { useEffect, useState } from "react";
import { GetBooks } from "../hooks/function";
import { useSelector } from "react-redux";
const BookIndex = () => {
  const data = useSelector((state) => state?.book);

  if (data?.Loading) {
    return <Loading />;
  }
  if (data?.Error) {
    return <Error />;
  }

  return (
    <div className="w-full flex  flex-wrap px-3 md:px-10 lg:px-11">
      {data?.books?.map((elm) => (
        <BooksCard key={elm.id} elm={elm} GetBooks={GetBooks} />
      ))}
    </div>
  );
};

export default BookIndex;
