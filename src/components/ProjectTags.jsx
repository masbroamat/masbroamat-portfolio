import "../App.css";

const ProjectTags = ({ text }) => {
  return (
    <div className="tagsText drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] rounded-[33px] px-4 py-2">
      <p className="text-center title_gradient text-[16px] opacity-[94%] font-inter font-medium bg-[length:500px_1000px] bg-[left_top_1.1rem]">{text}</p>
    </div>
  );
};

export default ProjectTags;
