import Card from "../components/card";
import useProducts from "../hooks/use-products";

const Home = () => {
  const products = useProducts();
  if (!products.length)
    return (
      <div>
        <div className='text-3xl text-center mt-[20%]'>
          No data found in server
        </div>
      </div>
    );
  else
    return (
      <div className=' grid grid-cols-3 gap-10'>
        {products?.map((el) => (
          <Card key={el._id} {...el} />
        ))}
      </div>
    );
};

export default Home;
