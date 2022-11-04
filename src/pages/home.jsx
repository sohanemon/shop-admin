import Card from "../components/card";
import useProducts from "../hooks/use-products";

const Home = () => {
  const products = useProducts();
  console.log("🚀 > Home > products", products);
  return (
    <div className=' grid grid-cols-3 gap-10'>
      {products?.map((el) => (
        <Card key={el._id} {...el} />
      ))}
    </div>
  );
};

export default Home;
