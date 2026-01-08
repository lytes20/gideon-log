import { NavLink } from "react-router";
import "../styles/header.css";

interface HeaderProps {
  parent?: string;
}

function Header({ parent }: HeaderProps) {
  return (
    <header>
      <ul className={parent === "home" ? "justify-center" : ""}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            gideon
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/experience"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            experience
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            blog
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
