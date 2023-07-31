import { useRouteError } from "react-router-dom";

export const ErrorDetails = () => {
  const error = useRouteError();
  return <section>{error.message}</section>;
};
