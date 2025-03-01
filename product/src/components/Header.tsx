import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import "./styles/header.css";

export default function Header() {
  const totalItems = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  return (
    <header>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart <span>({totalItems})</span>
        </Link>
      </nav>
    </header>
  );
}
