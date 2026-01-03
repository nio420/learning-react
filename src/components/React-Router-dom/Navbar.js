import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}> Home </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={{ textDecoration: "none", color: "green" }}> About </NavLink>
        </li>
        <li>
          <NavLink to="/services" style={{ textDecoration: "none", color: "magenta" }}> Services </NavLink>
        </li>
        <li>
          <NavLink to="/posts/react" style={{ textDecoration: "none", color: "purple" }}> React </NavLink>
        </li>
        <li>
          <NavLink to="/posts/js" style={{ textDecoration: "none", color: "teal" }}> javascript </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" style={{ textDecoration: "none", color: "red" }}> Dashboard </NavLink>
        </li>
      </ul>
    </nav>
  );
}
