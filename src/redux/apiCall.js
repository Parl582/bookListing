import axios from "axios";
import { Error, Loading, getData } from "./bookSlice";

const url = "http://68.178.162.203:8080/application-test-v1.1/books";

export const GetData = async (dispatch) => {
  dispatch(Loading());
  try {
    const res = await axios.get(url);
    dispatch(getData(res.data.data));
  } catch (e) {
    console.log(e);
    dispatch(Error());
  }
};

//update
export const UpdateData = async (info, id, dispatch) => {
  dispatch(Loading());
  try {
    await axios.put(`${url}/${id}`, info);
    GetData(dispatch);
  } catch (e) {
    console.log(e);
    dispatch(Error());
  }
};
//add
export const AddBooks = async (info, dispatch) => {
  dispatch(Loading());
  try {
    await axios.post(url, info);
    GetData(dispatch);
  } catch (e) {
    console.log(e);
    dispatch(Error());
  }
};
