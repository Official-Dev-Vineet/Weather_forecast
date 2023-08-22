import { useRef, useState } from "react";
import { Header } from "../../Utils/Header/Header";
import { WeatherCard } from "../../Utils/Card/WeatherCard";

export const Forecast = () => {
  const locate = useRef("");
  const [weather, setWeather] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const findWeather = async (city) => {
    locate.current.value.length > 0
      ? fetchWeather(city)
      : setError("Please Enter City");
  };
  const fetchWeather = (city) => {
    setLoader(true);
    setWeather(null);
    setError(null);
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=dd3b9fcd504a49d0bd4100704230107&q=${city}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const { current, location } = data;
        setWeather({ current, location });
      })
      .catch(() => {
        setError("city not found");
      })
      .finally(() => {
        setLoader(false);
      });
  };
  return (
    <section>
      <Header
        title="Weather Forecast"
        subtitle="Free Weather Forecast for commercial and non-commercial use."
      />

      <div className="flex mw mx-auto mt mb flex-col gap-md">
        <input type="text" placeholder="Enter City" ref={locate} style={{fontFamily:"Patua One"}} />
        <button onClick={() => findWeather(locate.current.value.trim())}>
          Search
        </button>
        {error && <p className="error-text">{error}</p>}
      </div>
      {weather && error === null ? (
        <WeatherCard
          icon={weather.current.condition.icon}
          title={
            weather.location.name +
            ", " +
            weather.location.region +
            ", " +
            weather.location.country
          }
          subtitle={weather.current.condition.text}
          data={weather.current}
        />
      ) : loader ? (
        <div className="spinner mw mx-auto"></div>
      ) : null}
    </section>
  );
};
