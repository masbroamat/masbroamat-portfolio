import ProjectCards from "./ProjectCards";
import TodoImg from "../assets/todocover.jpg";
import solanaImg from "../assets/solanawalletcover.jpg";
import sulamImg from "../assets/sulamscoreboardcover.jpg";
import yasrimanImg from "../assets/yasrimancover.jpg";
import waktuImg from "../assets/waktusolatmalaysiacover.jpg";


const Projects = ({ projRef }) => {
  return (
    <div ref={projRef} className="pt-1">
      <div
        className="flex justify-start items-center flex-col mt-28 overflow-x-hidden"
      >
        <div className="projectTitle flex flex-col justify-center items-center mb-10">
          <h2 className="title_gradient font-calsans text-[48px] leading-[48px]">
            Not a man of his word but a man of his work
          </h2>
          <h3 className="font-inter font-medium text-[16px] leading-[48px] text-white opacity-50">
            Definitely a man of his word too!
          </h3>
        </div>
        <div className="projectCards flex flex-wrap w-5/6 justify-center items-center gap-x-4 mx-auto">
          <ProjectCards
            title="Solana Wallet"
            subtitle="A front-end web development project using the Next.js framework, Tailwind CSS, with Phantom Wallet integration."
            link="https://github.com/masbroamat/solanawalletbounty"
            imagePlaceholder={solanaImg}
            tag1={"Next.js"}
            tag2={"Tailwind CSS"}
          />
          <ProjectCards
            title="SULAM Scoreboard"
            subtitle="A full stack web application using PERN stack to calculate each group's points for the SULAM program."
            link="https://github.com/masbroamat/SULAM-Scoreboard"
            imagePlaceholder={sulamImg}
            tag1={"PERN"}
            tag2={"Heroku"}
          />
          <ProjectCards
            title="Yasriman Online Shop"
            subtitle="A full stack web application using java springboot application as the framework. Deployable to heroku web hosting service."
            link="https://github.com/masbroamat/YasrimanWebShop---UiTM-Group-Project"
            imagePlaceholder={yasrimanImg}
            tag1={"Spring Boot"}
            tag2={"Heroku"}
          />
          <ProjectCards
            title="Waktu Solat Malaysia"
            subtitle="A full stack web application using java, JakartaEE with Maven. API integration with aladhan.com prayer times public API."
            link="https://github.com/masbroamat/waktusolatmalaysia"
            imagePlaceholder={waktuImg}
            tag1={"JakartaEE"}
            tag2={"Maven"}
          />
          <ProjectCards
            title="To-Do List App"
            subtitle="A simple To-Do List application built using the PERN stack (PostgreSQL, Express, React, Node.js)."
            link="https://github.com/masbroamat/Todo-List-PERN-stack"
            imagePlaceholder={TodoImg}
            tag1={"PERN"}
            tag2={"Heroku"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
