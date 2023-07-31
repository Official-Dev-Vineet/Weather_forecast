import { Link } from "react-router-dom";
import { Header } from "../Utils/Header/Header";

export const PageNotFound = () => {
  return (
    <div>
      <Header title="Page Not Found" subtitle="404" />
      <h1>
        <Link to={"/"}>Go Back </Link>
      </h1>
    </div>
  );
};
