import { useEffect, useRef, useState } from "react";
import { Header } from "../Utils/Header/Header";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const name = useRef();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  function formHandling(e) {
    e.preventDefault();
    const nameValue = name.current.value;
    const usernameValue = username.current.value;
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    nameValue && usernameValue && emailValue && passwordValue
      ? setError(null)
      : setError("Please Fill All Fields");
    const userObject = {
      name: nameValue,
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
    };
    localStorage.setItem("user", JSON.stringify(userObject));
    name.current.value = "";
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    navigate("/login", { replace: true });
  }
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user !== null) {
      navigate("/login");
    }
  });
  return (
    <section>
      <Header
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
