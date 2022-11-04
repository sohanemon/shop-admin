import axios from "axios";
import { useEffect, useState } from "react";

const useSingleProduct = (_id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/${_id}`)
      .then((res) => console.log(res.data));
    return () => {};
  }, []);
  return product;
};

export default useSingleProduct;
