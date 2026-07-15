import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/about">About</NavLink>

      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;