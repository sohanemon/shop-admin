import { Link } from "react-router-dom";

const Card = ({ title, price, manufacturer, photoURL, _id }) => {
  return (
    <>
      <div className='card w-96 h-56 group bg-base-100 shadow-xl image-full'>
        <figure>
          <img
            src={photoURL}
            alt={title}
            className='object-cover group-hover:scale-105 duration-500 w-full h-full'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title text-2xl'>{title}</h2>
          <p>Current price: ${price}</p>
          <p>Manufacturer: {manufacturer}</p>
          <div className='card-actions justify-end'>
            <Link to={`modify/${_id}`}>
              <button className='btn btn-primary'>Modify</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
