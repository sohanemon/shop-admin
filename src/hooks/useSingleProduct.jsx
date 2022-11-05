import axios from "axios";
import { useEffect, useState } from "react";

const useSingleProduct = (_id) => {
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (_id)
      axios
        .get(`${process.env.REACT_APP_HOST}/${_id}`)
        .then((res) => setProduct(res.data));
    return () => {};
  }, [_id]);
  return product;
};

export default useSingleProduct;
