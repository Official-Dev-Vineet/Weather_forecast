import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Forecast } from "./Components/Forecast/Forecast";
import { RootLayout } from "./Components/RootLayout";
import { PageNotFound } from "./Components/PageNotFound";
import { ErrorDetails } from "./Components/ErrorDetails";
import { ThemeContext } from "./Components/ThemeContext";
import { useEffect, useState } from "react";
import { User } from "./Auth/User";
import { Login } from "./Auth/Login";
export const App = () => {
  const [theme, setTheme] = useState(localStorage?.getItem("theme") || "light");
  const [user, setUser] = useState(
    JSON.parse(localStorage?.getItem("user"))?.username || null
  );
  useEffect(() => {
    theme === "light"
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme === "light"
      ? document.body.classList.remove("dark")
      : document.body.classList.add("dark");
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorDetails />}>
        <Route
          path="/"
          index
          element={
            user !== null && user !== undefined ? <Forecast /> : <Login />
          }
        />
        <Route
          path="/Forecast"
          index
          element={
            user !== null && user !== undefined ? <Forecast /> : <Login />
          }
        />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <ThemeContext.Provider value={{ theme, setTheme, user, setUser }}>
      <RouterProvider fallbackElement={<div>Loading...</div>} router={router} />
    </ThemeContext.Provider>
  );
};
