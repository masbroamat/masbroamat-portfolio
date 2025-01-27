import Diamond from "./Diamond";
import "../App.css";
import masbroamatpic from "../assets/masbroamatpic.png";
// import Script from "../Script";

const Hero = ({ homeRef }) => {
  return (
    <div ref={homeRef} className="hero-container mt-[-10.2vh] overflow-x-hidden">
      {/* <Script/> */}
      <div className="headings font-inter w-[80vw] h-[100vh] mx-auto justify-between items-center relative mt-[20vh]">
        <h1 className="font-calsans text-[48px] title_gradient leading-[48px]">
          I'm masbro.
        </h1>
        <h2 className="font-medium text-[16px] opacity-[40%] leading-[48px]text-white">
          3D Designer and Web Developer
        </h2>
      </div>
      <div className="diamonds-container flex">
        <div className="hero-image">
          <img
            src={masbroamatpic}
            alt="masbroamatpic"
            draggable="false"
            className="mainimg"
          />
          <img
            src={masbroamatpic}
            alt="masbroamatpic"
            draggable="false"
            className="imgblur"
          />
          <img
            src={masbroamatpic}
            alt="masbroamatpic"
            draggable="false"
            className="imgshadow drop-shadow-[46px_40px_80px_rgba(0,0,0,0.65)]"
          />
        </div>
        <div className="diamond-child">
          <Diamond title="5+" subtitle="Completed projects" />
        </div>
        <div className="diamond-child">
          <Diamond title="1+ Years" subtitle="Experience in web development" />
          <Diamond title="10+" subtitle="Satisfied workmates" />
          <Diamond title="Internship" subtitle="Open to work" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
