import { useContext} from "react";
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
  return (
    <section className="mx-auto">
      <Header
        icon={<FaUserGear />}
        title="User Authentication"
        subtitle="User validated by localStorage"
      />
      <div className="flex flex-col pad-even mx-auto gap-md">
        {user ? <h1 className="tac">{user}</h1> : <SignUp />}
        {user && (
          <button className="block mx-auto mt" style={{cursor:"pointer",fontFamily:"Patua One"}} onClick={() => deleteUser()}>
            Delete User
          </button>
        )}
      </div>
    </section>
  );
};
