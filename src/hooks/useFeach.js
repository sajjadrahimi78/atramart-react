// https://www.omidfaryabi.ir/nilva/category-test

import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function useFeach(url, query = "") {
  // state
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // fetch data with axios and async await
  useEffect(() => {
    async function feachData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${url}?${query}`);
        setData(data);
      } catch (error) {
        setData([]);
        toast.error(error.message); // hander error with toasr
      } finally {
        setIsLoading(false);
      }
    }

    feachData();
  }, [url, query]);

  return { data, isLoading };
}
