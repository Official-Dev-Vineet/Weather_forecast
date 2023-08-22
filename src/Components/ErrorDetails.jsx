import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";
import { VscError } from "react-icons/vsc";
import "./error.css";

export const ErrorDetails = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    if (error.status === 400) {
      return <div>This page doesn&apos;t exist exist!</div>;
    }
  }
  return (
    <section className="error">
      <h1 className="tac">
        <VscError />
      </h1>
      <h2 className="tac mt">Data not found ! </h2>
      <p className="tac mt">
        Search Again :{" "}
        <Link to="/" replace style={{ color: "red", fontFamily: "Patua One" }}>
          Go Back
        </Link>{" "}
      </p>
    </section>
  );
};
