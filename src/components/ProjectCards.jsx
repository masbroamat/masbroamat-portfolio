import "../App.css";
import ArrowOutwardOutlinedIcon from "@mui/icons-material/ArrowOutwardOutlined";
import ProjectTags from "./ProjectTags";

const ProjectCards = ({ title, subtitle, link, imagePlaceholder, tag1, tag2 }) => {
  return (
    <div className="card-wrapper font-inter mb-4 cursor-pointer " onClick={() => {window.open(link)}}>
      <div className="card-container pb-6">
        <div className="card-content gap-1">
          <div className="cardImage">
            <img src={imagePlaceholder} alt="" draggable="false" />
          </div>
          <div className="cardTexts p-6 flex flex-col text-left">
            <div className="cardTitleContainer flex justify-start items-center gap-4">
              <h1
                className="title title_gradient bg-[length:500px_1000px] bg-[left_top_1.7rem] font-semibold text-[24px] leading-[40px] cursor-pointer "
                onClick={() => {
                    window.open(link);
                }}
              >
                {title}
              </h1>
              <ArrowOutwardOutlinedIcon onClick={() => {
                    window.open(link);
                }} className="cursor-pointer"/>
            </div>
            <h2 className="subtitle font-inter font-normal leading-[17px] text-[16px] mix-blend-difference opacity-[39%]">
              {subtitle}
            </h2>
          </div>
          <div className="cardTags flex justify-start w-full gap-6 px-6">
            <ProjectTags text={tag1}/>
            <ProjectTags text={tag2}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
