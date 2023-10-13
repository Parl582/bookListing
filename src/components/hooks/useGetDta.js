import axios from "axios";
import { useEffect, useState } from "react";

const useGetdata = (url) => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const GetBooks = async () => {
      try {
        const res = await axios.get(url);
        setdata(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    GetBooks();
  }, [url]);
  return { data, loading, error };
};

export default useGetdata;


