import PropTypes from "prop-types";
import "./card.css";
export const WeatherCard = ({ icon, title, subtitle, data }) => {
  return (
    <div className="weather-card mw mb mx-auto" style={{ "--max-w": 80 }}>
      <h2 className="tac mt mb inline-block" style={{ width: "100%" }}>
        Weather Data
      </h2>
      <p>
        You search for :{" "}
        <strong style={{ fontFamily: "Patua One", textTransform: "uppercase" }}>
          {title}
        </strong>
      </p>
      <div className="head mt">
        <div className="title">
          <p>
            Status : <strong>{subtitle}</strong>
          </p>
        </div>
        <div className="icon">
          <img src={icon} alt={data.condition.text} />
        </div>
      </div>
      <div className="data-area">
        <div className="temperature-area">
          <div className="temp grid grid-column-12 pad-even tac align-center justify-center gap-sm">
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
        </div>
        <p>Other Data</p>
        <div className="group-data flex flex-wrap mt tac ">
          <div className="humidity-area">
            <div className="humidity">
              <p>Humidity :{data.humidity}</p>
            </div>
          </div>
          <div className="wind-area">
            <div className="wind">
              <p>
                Wind Speed in <span title="Miles per hour">Mph</span> :
                {data.wind_mph}
              </p>
              <p>
                Wind Speed in <span title="Kilometers per hour">Kph</span> :
                {data.wind_kph}
              </p>
              <p>Wind Direction :{data.wind_dir}</p>
              <p>
                wind gust in <span title="Miles per hour">Mph</span> :
                {data.gust_mph}
              </p>
              <p>
                wind gust in <span title="Kilometers per hour">Kph</span> :
                {data.gust_kph}
              </p>
            </div>
          </div>
          <div className="pressure-area">
            <div className="pressure">
              <p>
                Pressure in <span title="Millibars">Mb</span>:{data.pressure_mb}
              </p>
              <p>
                {" "}
                Pressure in <span title="inches of mercury">inHg</span> :{" "}
                {data.pressure_in}{" "}
              </p>
            </div>
          </div>
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
