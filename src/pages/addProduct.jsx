import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";

const AddProduct = ({ modify }) => {
  const params = useParams();
  const product = useSingleProduct(params._id);
  // console.log(product);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`${process.env.REACT_APP_HOST}/post`, data)
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='card-body max-w-screen-md mx-auto'
      >
        <h1 className='text-3xl text-center'>
          {modify ? "Update" : "Add new product"}
        </h1>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Product name</span>
          </label>
          <input
            {...register("title", { required: "* Title is required" })}
            type='text'
            placeholder='Iphone'
            className='input input-bordered'
          />{" "}
          {errors && (
            <span className='mt-3 text-red-500'>{errors?.title?.message}</span>
          )}
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Price</span>
          </label>
          <input
            {...register("price", { required: "* Price is required" })}
            type='text'
            placeholder='2300'
            className='input input-bordered'
          />{" "}
          {errors && (
            <span className='mt-3 text-red-500'>{errors?.price?.message}</span>
          )}
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Manufacturer</span>
          </label>
          <input
            {...register("manufacturer", {
              required: "* Manufacturer is required",
            })}
            type='text'
            placeholder='Apple Inc.'
            className='input input-bordered'
          />
          {errors && (
            <span className='mt-3 text-red-500'>
              {errors?.manufacturer?.message}
            </span>
          )}
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Photo URL</span>
          </label>
          <input
            {...register("photoURL", { required: "* PhotoURL is recommended" })}
            type='text'
            placeholder='https://imgur.com/dkf3fj'
            className='input input-bordered'
          />
          {errors && (
            <span className='mt-3 text-red-500'>
              {errors?.photoURL?.message}
            </span>
          )}
        </div>

        <div className='form-control mt-6'>
          <button className='btn btn-primary'>
            {modify ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
