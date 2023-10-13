import { useState } from "react";
import CommonModel from "./CommonModel";

import { UpdateData } from "../../redux/apiCall";
import { useDispatch } from "react-redux";

const EditModal = ({ open, handleOpen, data }) => {
  const dispatch = useDispatch();
  const [formInfo, setFormInfo] = useState({
    ...data,
  });
  const handlePost = async (id) => {
    try {
      await UpdateData(formInfo, id, dispatch);
      handleOpen();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <CommonModel
        open={open}
        handleOpen={handleOpen}
        data={data}
        handlePost={handlePost}
        setFormInfo={setFormInfo}
        formInfo={formInfo}
      />
    </>
  );
};

export default EditModal;
