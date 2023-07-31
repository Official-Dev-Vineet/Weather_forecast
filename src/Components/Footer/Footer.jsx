import { currentYear } from "../../constant";
import './footer.css'
export const Footer = () => {
  return (
    <footer className="flex w-full h-full flex-col align-center justify-center">
      <h1>weather Forecast</h1>
      <p className="mt" style={{'--value':1.5}}>Copyright &copy; 2022-{currentYear}</p>
    </footer>
  );
};
