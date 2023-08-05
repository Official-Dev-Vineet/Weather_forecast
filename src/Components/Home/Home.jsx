import { Header } from "../../Utils/Header/Header";
import { TiWeatherPartlySunny } from "react-icons/ti";
import imgSrc from "../../assets/images/promo-figure-alt.svg";
import { TextCard } from "../../Utils/Card/TextCard";
import { FaShapes } from "react-icons/fa";
export const Home = () => {
  return (
    <section>
      <Header
        icon={<TiWeatherPartlySunny />}
        title="Welcome to our Weather App"
        subtitle="Free Weather Forecast for commercial and non-commercial use."
      />
      <main className="main-horizontal-pad">
        <section className="grid grid-column-12 align-center justify-center">
          <div className="text-view grid-span-6">
            <h2 className="ml" style={{fontFamily:"Patua One","--value":4.9}}>
              Real Time, Forecasted, Future, Marine and Historical Weather
            </h2>
            <div className="cards">
              <TextCard
                icon={<FaShapes />}
                title="Real-time Weather Data"
                subtitle="Real-time or current JSON weather and XML weather API provides access to near real-time weather information for millions of locations worldwide by global collaborations of weather stations and high resolution local weather models."
                link="/forecast"
              />
            </div>
          </div>
          <div className="image-view grid-span-6">
            <img src={imgSrc} alt="promo figure" />
          </div>
        </section>
      </main>
    </section>
  );
};
