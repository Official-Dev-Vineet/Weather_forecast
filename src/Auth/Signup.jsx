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
    nameValue.length > 3 &&
    usernameValue.length > 4 &&
    emailValue.length > 8 &&
    passwordValue.length > 6
      ? setError(null)
      : setError(
          "Please Fill All Fields correctly <br/> <ul class='ml mt error-text'> <li> Name must be more than 3 characters</li> <li> Username must be more than 4 characters</li> <li> Email must be more than 8 characters</li> <li> Password must be more than 6 characters</li> </ul>"
        );
    error !== null
      ? signUpUser(nameValue, usernameValue, emailValue, passwordValue)
      : null;
  }
  const signUpUser = (nameValue, usernameValue, emailValue, passwordValue) => {
    const userObject = {
      name: nameValue,
      username: usernameValue,
      email: emailValue,
      password: passwordValue,
    };
    name.current.value = "";
    username.current.value = "";
    email.current.value = "";
    password.current.value = "";
    localStorage.setItem("user", JSON.stringify(userObject));
    navigate(`/user`, { replace: true });
  };
  useEffect(() => {
    const user = localStorage?.getItem("user");
    if (user !== null && user !== undefined && user !== "") {
      navigate("/user");
    }
  });
  return (
    <section>
      <Header
        className="ml"
        icon={<AiOutlineUserAdd />}
        title="Sign Up"
        subtitle="Please SignUp for an account and access this website"
      />
      <div className="form" style={{'--max-w':40}}>
        <h2 className="mb mt tac">Note: All the fields are required!</h2>
        <form method="post" className="flex mw mx-auto flex-col gap-sm">
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
            style={{ cursor: "pointer" }}
            type="submit"
            onClick={(e) => formHandling(e)}
            value="Sign Up"
          />
        </form>
        {error && (
          <p
            className="mw mt mx-auto" 
            dangerouslySetInnerHTML={{ __html: error }}
          />
        )}
      </div>
    </section>
  );
};
