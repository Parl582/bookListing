import axios from "axios";
import { Error, Loading, getData } from "./bookSlice";

let url = "http://68.178.162.203:8080/application-test-v1.1/books";

export const GetData = async (dispatch, pageNo) => {
  dispatch(Loading());
  try {
    const res = await axios.get(`${pageNo ? `${url}?page=${pageNo}` : url}`);

    dispatch(getData(res.data));
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
export const searchBooks = async (info, dispatch) => {
  dispatch(Loading());
  try {
    const res = await axios.get(`${url}?title=${info}`);
    dispatch(getData(res.data));
  } catch (e) {
    console.log(e);
    dispatch(Error());
  }
};

// sorting
export const sortItem = async (info, dispatch, pageNo) => {
  dispatch(Loading());
  try {
    // const res = await axios.get(`${url}?DIR=${info}`);
    const res = await axios.get(
      `${pageNo ? `${url}?page=${pageNo}&DIR=${info}` : `${url}?DIR=${info}`}`
    );
    dispatch(getData(res.data));
  } catch (e) {
    console.log(e);
    dispatch(Error());
  }
};
