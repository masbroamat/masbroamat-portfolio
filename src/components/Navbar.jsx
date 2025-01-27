import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import resume from "/resume.pdf";

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <nav className="font-inter flex sticky top-0 w-full bg-transparent backdrop-blur-[8px] z-[50] overflow-hidden">
      <div className="flex w-[80vw] mx-auto justify-between items-center my-2">
        <p className="text-[24px] font-calsans title_gradient leading-[60px] bg-[length:300%] bg-[left_top_-1rem]">
          masbroamat
        </p>
        <button
          className="button_gradient shadow-[0_0_60px_-10px_rgba(255,255,255,0.25)]"
          onClick={handleDownload}
        >
          <p className="font-medium flex justify-center items-center gap-6 hover:scale-105">
            Resume <FileDownloadOutlinedIcon />{" "}
          </p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
