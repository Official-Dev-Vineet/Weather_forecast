import { useContext } from "react";
import { Header } from "../Utils/Header/Header";
import { ThemeContext } from "../Components/ThemeContext";
import { SignUp } from "./Signup";

export const User = () => {
  const { user, setUser } = useContext(ThemeContext);
  return (
    <section>
      <Header title="User Authentication" subtitle="Check validation" />
      {user ? <h1>{user}</h1> : <SignUp />}
      <button onClick={() => setUser(null)}>logout</button>
    </section>
  );
};
