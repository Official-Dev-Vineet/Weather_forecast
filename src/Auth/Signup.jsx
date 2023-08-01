import { useEffect, useRef, useState } from "react";
import { Header } from "../Utils/Header/Header";
import { useNavigate } from "react-router-dom";
import { AiOutlineUserAdd } from "react-icons/ai";
export const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const name = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  function formHandling(e) {
    e.preventDefault();
    const nameValue = name.current.value.trim();
    const usernameValue = username.current.value.trim();
    const emailValue = email.current.value.trim();
    const passwordValue = password.current.value.trim();
    name.current.value = "";
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    nameValue.length > 3 &&
    usernameValue.length > 4 &&
    emailValue.length > 8 &&
    passwordValue.length > 6
      ? setError(null)
      : setError("Please Fill All Fields correctly");
    error !== null
      ? () => {
          const userObject = {
            name: nameValue,
            username: usernameValue,
            email: emailValue,
            password: passwordValue,
          };
          localStorage?.setItem("user", JSON.stringify(userObject));
          navigate(`/user/login/${usernameValue}`, { replace: true });
        }
      : null;
  }
  useEffect(() => {
    const user = localStorage?.getItem("user");
    if (user !== null && user !== undefined && user !== "") {
      navigate("/user");
    }
  });
  return (
    <section>
      <Header
        icon={<AiOutlineUserAdd />}
        title="Sign Up"
        subtitle="Please SignUp for an account and access this website"
      />
      <div className="form signUpForm">
        <form method="post" className="flex flex-col mw-100 mx-auto gap-sm">
          <input type="text" name="name" ref={name} placeholder="Name" />
          <input
            type="text"
            name="username"
            ref={username}
            placeholder="Username"
          />
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
            value="Sign Up"
          />
        </form>
        {error && <p className="mw-100  mx-auto">{error}</p>}
      </div>
    </section>
  );
};
