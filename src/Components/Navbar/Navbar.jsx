import "./navbar.css";
import { link } from "../../constant";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-sm.png";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
export const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const themeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <nav className="flex justify-between align-center gap-lg main-horizontal-pad">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="weather forecast" />
        </Link>
      </div>
      <div className="flex gap-lg">
        <ul className="flex gap-md align-center">
          {link.map((item, index) => (
            <li key={index}>
              <NavLink to={item.src}>{item.text} </NavLink>
            </li>
          ))}
        </ul>
        <div className="theme">
          <button
            onClick={() => themeHandler()}
            className="flex align-center justify-center"
          >
            {theme === "light" ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
          </button>
        </div>
      </div>
    </nav>
  );
};
