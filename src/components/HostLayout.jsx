import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <nav className="header-host">
        <Link to="/host" target="_blank" rel="noopener noreferrer">
          Dashboard
        </Link>
        <Link to="/host/income" target="_blank" rel="noopener noreferrer">
          Income
        </Link>
        <Link to="/host/reviews" target="_blank" rel="noopener noreferrer">
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
