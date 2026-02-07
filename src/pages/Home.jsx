import { Link } from "react-router-dom";
import background from "../assets/images/hero.jpg";
export default function Home () {
    return (
        <div className="home">
            <div className="image-container">
                <img className="back-image" src={background} alt="background image" />
            </div>
            <div className="text-container">
                <h2>Welcome to the Socks Store!</h2>
                <p>Find the best socks for men, women, and kids.</p>
            </div>

            <button className="btn">
                <Link to="/products">ViewProducts</Link>
            </button>
            
        </div>
    );
}