import { NavLink } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">gideon</NavLink>
        </li>

        <li>
          <NavLink to="/blog">blog</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
