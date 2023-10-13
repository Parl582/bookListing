import { useDispatch } from "react-redux";
import BookIndex from "../books/BookIndex";
import Header from "./Header";
import { GetData } from "../../redux/apiCall";
import { useEffect } from "react";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    GetData(dispatch);
  }, []);

  return (
    <div className="">
      <Header />
      <BookIndex />
    </div>
  );
};

export default HomePage;
