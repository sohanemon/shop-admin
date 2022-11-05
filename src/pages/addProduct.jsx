import axios from "axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import useSingleProduct from "../hooks/useSingleProduct";

const AddProduct = ({ modify }) => {
  const params = useParams();
  const product = useSingleProduct(params._id);
  console.log(product);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    if (modify)
      axios
        .put(`${process.env.REACT_APP_HOST}/put/${params._id}`, data)
        .then((res) => console.log(res.data));
    else
      axios
        .post(`${process.env.REACT_APP_HOST}/post`, data)
        .then((res) => console.log(res.data));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    axios
      .delete(`${process.env.REACT_APP_HOST}/delete/${params._id}`)
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
            defaultValue={product?.title}
            {...register("title", {
              required: !modify && "* Title is required",
            })}
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
            defaultValue={product?.price}
            {...register("price", {
              required: !modify && "* Price is required",
            })}
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
            defaultValue={product?.manufacturer}
            {...register("manufacturer", {
              required: !modify && "* Manufacturer is required",
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
            defaultValue={product?.photoURL}
            {...register("photoURL", {
              required: !modify && "* PhotoURL is recommended",
            })}
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
          {modify && (
            <button onClick={handleDelete} className='btn btn-error mt-4'>
              Delete
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default AddProduct;
