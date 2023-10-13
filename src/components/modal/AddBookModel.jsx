import CommonModel from "./CommonModel";
import { AddBooks } from "../../redux/apiCall";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddBookModel = ({ open, handleOpen, data }) => {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({
    ...data,
  });

  const handlePost = async () => {
    await AddBooks(formInfo, dispatch);
    handleOpen();
  };
  return (
    <>
      <CommonModel
        handleOpen={handleOpen}
        open={open}
        handlePost={handlePost}
        setFormInfo={setFormInfo}
        formInfo={formInfo}
      />
    </>
  );
};

export default AddBookModel;
