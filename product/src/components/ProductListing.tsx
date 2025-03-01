import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import placeHolder from "../assets/placeHolder.png";
import "./styles/productListing.css";

interface Plant {
  id: number;
  name: string;
  price: number;
  category: string;
  img: string;
}

const plants: Plant[] = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    img: placeHolder,
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 15,
    category: "Low Light",
    img: placeHolder,
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 12,
    category: "Flowering",
    img: placeHolder,
  },
  {
    id: 4,
    name: "Cactus",
    price: 8,
    category: "Succulents",
    img: placeHolder,
  },
  {
    id: 5,
    name: "Fiddle Leaf Fig",
    price: 25,
    category: "Tree",
    img: placeHolder,
  },
  {
    id: 6,
    name: "Pothos",
    price: 10,
    category: "Vine",
    img: placeHolder,
  },
];

export default function ProductListing() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.img} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addToCart(plant))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
