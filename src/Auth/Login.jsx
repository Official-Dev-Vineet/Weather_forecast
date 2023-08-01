import { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../Utils/Header/Header";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ThemeContext } from "../Components/ThemeContext";
import { FaUserShield } from "react-icons/fa";
export const Login = () => {
  const { username } = useParams();
  console.log(username);
  const { user, setUser } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const email = useRef();
  const password = useRef();
  function formHandling(e) {
    e.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    email.current.value = "";
    password.current.value = "";
    emailValue && passwordValue
      ? checkForm(emailValue, passwordValue)
      : setError("Please Fill All Fields");
  }
  const validate = (auth) => {
    if (auth) {
      setUser(JSON.parse(localStorage.getItem("user")).username);
      navigate("/user");
    }
  };
  function checkForm(emailValue, passwordValue) {
    const user = localStorage.getItem("user");
    emailValue === JSON.parse(user)?.email &&
    passwordValue === JSON.parse(user)?.password
      ? validate(true)
      : setError("Invalid Credentials");
  }

  useEffect(() => {
    user !== null && user !== undefined ? navigate("/user") : null;
  });
  return (
    <section>
      <Header
        icon={<FaUserShield />}
        title="Login"
        subtitle="Secure Login Using Your localStorage Data."
      />
      <div className="form login">
        <form method="post" className="flex flex-col mw-100 mx-auto gap-sm">
          <input type="email" name="email" ref={email} placeholder="Email" />
          <input
            type="password"
            name="password"
            ref={password}
            placeholder="Password"
          />
          <input
            type="submit"
            onClick={(e) => formHandling(e)}
            value="Sign In"
          />
        </form>
        {error && <p>{error}</p>}
        {user === null && user === undefined && (
          <p>
            Don&#34;t have an account?
            <Link to="/user">SignUp</Link>
          </p>
        )}
      </div>
    </section>
  );
};
