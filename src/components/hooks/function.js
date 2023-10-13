import axios from "axios";

export const GetBooks = async (setdata,setError,setLoading) => {
    try {
      const res = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books"
      );
      setdata(res);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };