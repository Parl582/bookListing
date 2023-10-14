import { useDispatch, useSelector } from "react-redux";
import BookIndex from "../books/BookIndex";
import Header from "./Header";
import { GetData } from "../../redux/apiCall";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PaginationButton from "./PaginationButton";

const HomePage = () => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useSearchParams();
  const pages = pageNo.get("page");
  const currentPageNo = useSelector((state) => state.book.currentPage);

  useEffect(() => {
    if (currentPageNo) {
      GetData(dispatch, currentPageNo);
      return;
    } else {
      GetData(dispatch);
    }
  }, [pages, currentPageNo]);

  return (
    <>
      <Header />
      <BookIndex />
      <PaginationButton />
    </>
  );
};

export default HomePage;
