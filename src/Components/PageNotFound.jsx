import { Link } from "react-router-dom";
import { Header } from "../Utils/Header/Header";

export const PageNotFound = () => {
  return (
    <div>
      <Header title="Page Not Found" subtitle="404" />
      <h1 className="tac" style={{ fontFamily: "Patua One" ,textShadow:"2px 2px 1px red"}}>
        <Link to={"/"}>Go Back </Link>
      </h1>
    </div>
  );
};
