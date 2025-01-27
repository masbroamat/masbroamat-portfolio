import React, { useEffect, useRef } from "react";
import "../App.css";

const Diamond = ({ title, subtitle }) => {
  const diamondRef = useRef(null);

  useEffect(() => {
    const handleOnMouseMove = (e) => {
      if (diamondRef.current) {
        const { currentTarget: target } = e;
        
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Adjust coordinates for rotation
        const angle = -45; 
        const radians = (angle * Math.PI) / 180;
        const offsetX = x - rect.width / 2;
        const offsetY = y - rect.height / 2;

        const rotatedX = offsetX * Math.cos(radians) - offsetY * Math.sin(radians) + rect.width / 2;
        const rotatedY = offsetX * Math.sin(radians) + offsetY * Math.cos(radians) + rect.height / 2;

        target.style.setProperty("--mouse-x", `${rotatedX-40}px`);
        target.style.setProperty("--mouse-y", `${rotatedY-40}px`);
      }
    };

    const element = diamondRef.current;
    if (element) {
      element.addEventListener("mousemove", handleOnMouseMove);
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleOnMouseMove);
      }
    };
  }, []);

  return (
    <div className="diamond-wrapper font-inter" ref={diamondRef}>
      <div className="diamond-container">
        <div className="diamond-content gap-1">
          <h1 className="title title_gradient bg-[length:200%] bg-[left_top_2.7rem] font-semibold text-[16px]">
            {title}
          </h1>
          <h2 className="subtitle font-inter font-normal leading-[16px] text-[0.8rem] mix-blend-difference opacity-[39%]">
            {subtitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Diamond;
