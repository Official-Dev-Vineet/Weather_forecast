import { useContext, useEffect } from "react";
import { Header } from "../Utils/Header/Header";
import { ThemeContext } from "../Components/ThemeContext";
import { SignUp } from "./Signup";
import { FaUserGear } from "react-icons/fa6";
export const User = () => {
  const { user, setUser } = useContext(ThemeContext);
  function deleteUser() {
    localStorage.removeItem("user");
    setUser(null);
  }
  useEffect(() => {
    user ? console.log(`%c logged in as ${user}`, `color:var(--primary)`) : null;
  },[user])
  return (
    <section className="mx-auto">
      <Header
        icon={<FaUserGear />}
        title="User Authentication"
        subtitle="User validated by localStorage"
      />
      {user ? <h1 className="tac">{user}</h1> : <SignUp />}
      {user && (
        <button className="block mx-auto mt" onClick={() => deleteUser()}>
          Delete User
        </button>
      )}
    </section>
  );
};
