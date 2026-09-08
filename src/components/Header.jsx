import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to="/" target="_blank" rel="noopener noreferrer">
        #VanLife
      </Link>
      <nav>
        <Link to="/about" target="_blank" rel="noopener noreferrer">
          About
        </Link>
        <Link to="/vans" target="_blank" rel="noopener noreferrer">
          Vans
        </Link>
      </nav>
    </header>
  );
}
