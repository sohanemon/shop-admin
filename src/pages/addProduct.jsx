const AddProduct = () => {
  return (
    <>
      <div className='card-body max-w-screen-md mx-auto'>
        <h1 className='text-3xl text-center'>Add product</h1>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Product name</span>
          </label>
          <input
            type='text'
            placeholder='Iphone'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Price</span>
          </label>
          <input
            type='text'
            placeholder='2300'
            className='input input-bordered'
          />
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Manufacturer</span>
          </label>
          <input
            type='text'
            placeholder='Apple Inc.'
            className='input input-bordered'
          />
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>Photo URL</span>
          </label>
          <input
            type='text'
            placeholder='https://imgur.com/dkf3fj'
            className='input input-bordered'
          />
        </div>

        <div className='form-control mt-6'>
          <button className='btn btn-primary'>Login</button>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
