import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "../App.css";

const Contactme = () => {
  return (
    <div className="pt-28 overflow-x-hidden">
      <div className="flex justify-start items-center flex-col mt-28 mb-0 font-inter h-[60vh]">
        <div className="contactTitle flex flex-col justify-center items-center mb-10">
          <h2 className="title_gradient font-calsans text-[48px] leading-[48px]">
            It's now or never
          </h2>
          <h3 className="font-inter font-medium text-[16px] leading-[48px] text-white opacity-50">
            The sooner you start, the better the results!
          </h3>
        </div>
        <div className="buttons">
          <button 
            className="button_gradient shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)]"
            onClick={() => window.open("https://www.linkedin.com/in/syazwan-yacob/")}
            >
            <p className="font-medium flex justify-center items-center gap-6 hover:scale-105">
              Get in touch
              <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
