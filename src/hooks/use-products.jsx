import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/get`)
      .then((res) => setProducts(res.data));
    return () => {};
  }, []);

  return products;
};

export default useProducts;
