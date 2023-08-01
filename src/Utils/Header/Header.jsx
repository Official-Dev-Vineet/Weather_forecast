import PropTypes from "prop-types";
import "./header.css";
export const Header = ({ icon, title, subtitle }) => {
  return (
    <header className="main-horizontal-pad">
      <h1 className="flex align-center">
        <span className="flex align-center mt" style={{fontFamily:"inherit","--value":0.5}}>{icon}</span>
        <span className="ml" style={{fontFamily:"inherit","--value":1.5}}>{title}</span>
      </h1>
      <p className="ml mt">{subtitle}</p>
    </header>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
};
