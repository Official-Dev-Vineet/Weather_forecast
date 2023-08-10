import PropTypes from "prop-types";
import "./card.css";
import { BsWind } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { AiOutlineCompass } from "react-icons/ai";

export const WeatherCard = ({ icon, title, subtitle, data }) => {
  return (
    <div className="weather-card mw mb mx-auto" style={{ "--max-w": 80 }}>
      <h2 className="tac mt mb inline-block" style={{ width: "100%" }}>
        Weather Report
      </h2>
      <p>
        You search for weather data for :
        <strong style={{ fontFamily: "Patua One", textTransform: "uppercase" }}>
          {title}
        </strong>
      </p>
      <div className="head mt flex justify-between">
        <div className="title">
          <p>
            Status :<strong>{subtitle}</strong>
          </p>
        </div>
        <div className="icon">
          <img src={icon} alt={data.condition.text} />
        </div>
      </div>
      <div className="data-area">
        <div className="temp flex pad-even flex-wrap justify-center gap-md">
          <p className="grid-span-3">
            Temperature <br />
            <strong>{data.temp_c}&deg;C</strong>
          </p>
          <p className="grid-span-3">
            Temperature
            <br />
            <strong>{data.temp_f}&deg;F</strong>
          </p>
          <p className="grid-span-3">
            Temp. (Feel like)
            <br />
            <strong>{data.feelslike_c}&deg;C</strong>
          </p>
          <p className="grid-span-3">
            Temp. (Feel like) <br />
            <strong>{data.feelslike_f}&deg;F</strong>
          </p>
        </div>
        <p>Other Data</p>
        <div className="group-data flex flex-wrap justify-center gap-md mt tac">
          <p>
            <span className="icon">
              <WiHumidity />
            </span>
            Humidity
            <strong> {data.humidity}&#37;</strong>
          </p>
          <p>
            <span className="icon">
              <BsWind />
            </span>
            Wind Speed <br />
            <strong>
              {data.wind_mph}
              <span title="Miles per hour">Mph</span>
            </strong>
          </p>
          <p>
            <span className="icon">
              <BsWind />
            </span>
            Wind Speed <br />
            <strong>
              {data.wind_kph}
              <span title="Kilometers per hour">Kph</span>
            </strong>
          </p>
          <p>
            <span className="icon">
              <AiOutlineCompass />
            </span>
            Wind Direction <br />
            <strong>{data.wind_dir}</strong>
          </p>
          <p title="A sudden burst in wind speed is called the wind gusts and typically lasts under 20 seconds">
            <span className="icon">
              <FaWind />
            </span>
            wind gust <br />
            <strong>
              {data.gust_mph}
              <span title="Miles per hour">Mph</span>
            </strong>
          </p>
          <p title="A sudden burst in wind speed is called the wind gusts and typically lasts under 20 seconds">
            <span className="icon">
              <FaWind />
            </span>
            wind gust <br />
            <strong>
              {data.gust_kph} <span title="Kilometers per hour">Kph</span>
            </strong>
          </p>
          <p>
            <span className="icon">
              <BsSpeedometer />
            </span>
            Pressure
            <br />
            <strong>
              {data.pressure_mb}
              <span title="Millibars">Mb</span>
            </strong>
          </p>
          <p>
            <span className="icon">
              <BsSpeedometer />
            </span>
            Pressure <br />
            <strong>
              {data.pressure_in} <span title="inches of mercury">inHg</span>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
WeatherCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  data: PropTypes.object,
};
