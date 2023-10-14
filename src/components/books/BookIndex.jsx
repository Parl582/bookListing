import BooksCard from "./BooksCard";
import Loading from "./Loading";
import Error from "./Error";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { sortItem } from "../../redux/apiCall";
import { useNavigate, useSearchParams } from "react-router-dom";
const BookIndex = () => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useSearchParams();
  const pages = pageNo.get("page");
  const data = useSelector((state) => state?.book);
  const [sort, setSort] = useState();
  const handleSort = (e) => {
    setSort(e.target.value);
    sortItem(sort, dispatch, pages);
  };

  if (data?.Loading) {
    return <Loading />;
  }
  if (data?.Error) {
    return <Error />;
  }
  return (
    <div className="w-full flex  flex-wrap px-3 md:px-10 lg:px-11">
      <div className="w-full py-3 flex justify-end items-center gap-3">
        <select
          className="px-3 border border-gray-400/30 py-1 outline-none"
          onChange={handleSort}
        >
          <option value=""> Sort By </option>
          {["ASC", "DESC"].map((elm, i) => (
            <option value={elm} key={i}>
              {elm}
            </option>
          ))}
        </select>
      </div>
      {data?.books?.data?.map((elm) => (
        <BooksCard key={elm.id} elm={elm} />
      ))}
    </div>
  );
};

export default BookIndex;
