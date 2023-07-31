import PropTypes from "prop-types";
import './header.css'
export const Header = ({ title, subtitle }) => {
  return (
    <header className="main-horizontal-pad">
      <h1>{title}</h1>
      <p className="ml mt">{subtitle}</p>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};
