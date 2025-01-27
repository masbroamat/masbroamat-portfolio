import React, { useEffect, useRef } from "react";
import "../App.css";
import StarIcon from "@mui/icons-material/Star";

const Testimonials = () => {
  const testRef = useRef(null);

  useEffect(() => {
    const handleOnMouseMove = (e) => {
      if (testRef.current) {
        const { currentTarget: target } = e;

        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const elements = testRef.current.querySelectorAll(".testBox");
    elements.forEach((element) => {
      element.addEventListener("mousemove", handleOnMouseMove);
    });

    // Cleanup event listeners on component unmount
    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mousemove", handleOnMouseMove);
      });
    };
  }, []);

  return (
    <div ref={testRef} className="pt-1">
      <div className="flex justify-start items-center flex-col mt-28 mb-4 font-inter overflow-x-hidden">
        <div className="testimonialTitle flex flex-col justify-center items-center mb-10">
          <h2 className="title_gradient font-calsans text-[48px] leading-[48px]">
            Different eyes, different minds
          </h2>
          <h3 className="font-inter font-medium text-[16px] leading-[48px] text-white opacity-50">
            Voices of satisfaction and success
          </h3>
        </div>
        <div className="testContent w-5/6 h-3/6 flex justify-center items-center">
          <div className="grid grid-cols-4 grid-rows-6 xl:grid-rows-4 gap-4 h-full w-full">
            <div className="xl:col-start-2 xl:row-start-1 col-span-4 row-span-1 xl:col-span-2 xl:row-span-2 testBox drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
              <div className="review flex flex-col justify-center items-center min-h-full">
                <p className="font-calsans text-[96px] leading-[96px] text-white">10</p>
                <div className="review flex justify-center items-center">
                  <p className="font-light opacity-[50%] text-[14px] leading-[48px] text-white">Total reviews</p>
                </div>
              </div>
            </div>
            <div className="xl:col-start-1 xl:row-start-1 col-span-4 row-span-1 xl:col-span-1 xl:row-span-2 testBox drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
              <div className="review">
                <p className="font-light opacity-[40%] text-[16px] leading-[23px] text-white pb-[4rem]">
                  "Masbro technical know-how to create a website that truly stands out."
                </p>
              </div>
              <div className="ratingsandauthor absolute bottom-0 mb-[2rem]">
                <div className="ratings opacity-50">
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                </div>
                <div className="author font-normal opacity-[30%] text-[14px] leading-[16px] text-white">
                  Haikal
                </div>
              </div>
            </div>
            <div className="col-span-4 row-span-1 xl:col-span-1 xl:row-span-4 testBox drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
              <div className="review">
                <p className="font-light opacity-[40%] text-[16px] leading-[23px] text-white pb-[4rem]">
                "Working with masbro was an absolute game-changer for our brand. Not only did he bring our vision to life with stunning 3D designs, but he also developed a website that perfectly complements our aesthetic and functionality needs. The attention to detail in the 3D models was nothing short of extraordinary, shadow, and angle was meticulously crafted, giving our products a hyper-realistic look that we never imagined possible.”
                </p>
              </div>
              <div className="ratingsandauthor absolute bottom-0 mb-[2rem]">
                <div className="ratings opacity-50">
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                </div>
                <div className="author font-normal opacity-[30%] text-[14px] leading-[16px] text-white">
                  Faiz Azri
                </div>
              </div>
            </div>
            <div className="col-span-4 row-span-1 xl:col-span-1 xl:row-span-2 testBox drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
              <div className="review">
                <p className="font-light opacity-[40%] text-[16px] leading-[23px] text-white pb-[4rem]">
                  "Our new website looks amazing, thanks to masbro! It’s not just beautiful but also super easy to navigate."
                </p>
              </div>
              <div className="ratingsandauthor absolute bottom-0 mb-[2rem]">
                <div className="ratings opacity-50">
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                </div>
                <div className="author font-normal opacity-[30%] text-[14px] leading-[16px] text-white">
                  Taqieuddin
                </div>
              </div>
            </div>
            <div className="col-span-4 row-span-1 xl:col-span-1 xl:row-span-2 testBox drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
              <div className="review">
                <p className="font-light opacity-[40%] text-[16px] leading-[23px] text-white pb-[4rem]">
                  "Masbro made our 3D models look like they’re about to ask for a coffee break!"
                </p>
              </div>
              <div className="ratingsandauthor absolute bottom-0 mb-[2rem]">
                <div className="ratings opacity-50">
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                </div>
                <div className="author font-normal opacity-[30%] text-[14px] leading-[16px] text-white">
                  Syahmi
                </div>
              </div>
            </div>
            <div className="col-span-4 row-span-1 xl:col-span-1 xl:row-span-2 testBox drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
              <div className="review">
                <p className="font-light opacity-[40%] text-[16px] leading-[23px] text-white pb-[4rem]">
                  "Masbro took our 3D product visualization to the next level. His designs were lifelike, and the quality was unmatched!"
                </p>
              </div>
              <div className="ratingsandauthor absolute bottom-0 mb-[2rem]">
                <div className="ratings opacity-50">
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                  <StarIcon sx={{ fontSize: 14 }} />
                </div>
                <div className="author font-normal opacity-[30%] text-[14px] leading-[16px] text-white">
                  Acapman
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
