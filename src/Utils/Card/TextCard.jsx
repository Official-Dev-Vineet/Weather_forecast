import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const TextCard = ({ icon, title, subtitle, link }) => {
  return (
    <div className="textCard">
      <h1 className="flex align-center">
        <span
          className="flex align-center mt"
          style={{ fontFamily: "inherit", "--value": 0.5 }}
        >
          {icon}
        </span>
        <br />
        <span
          className="ml"
          style={{ fontFamily: "inherit", fontSize: "inherit", "--value": 1.5 }}
        >
          {title}
        </span>
      </h1>
      <p className="ml mt mw" style={{ "--value": 1.4, "--max-w": 45 }}>
        {subtitle}
      </p>
      <br />
      <button className="ml">
        <Link to={link}>View More</Link>
      </button>
    </div>
  );
};
TextCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.node,
  link: PropTypes.string,
};
