import { Link } from "react-router-dom";
import "./styles/landingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Green Haven</h1>
      <p>Welcome to Green Haven, your go-to store for beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
