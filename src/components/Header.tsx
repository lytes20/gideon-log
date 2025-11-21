import { NavLink } from "react-router";
import "./Header.css";

interface HeaderProps {
  parent?: string;
}
function Header(props: HeaderProps) {
  const { parent } = props;
  return (
    <header>
      <ul className={parent == "home" ? "justify-center" : ""}>
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
