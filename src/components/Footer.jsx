import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../App.css'

const Footer = ({ contactRef }) => {
  return (
    <div ref={contactRef} className='font-inter flex sticky top-0 w-full bg-transparent backdrop-blur-[8px] z-[50] overflow-hidden border-t-[0.5px] border-t-[#ffffff4D]'>
        <div className='flex w-[80vw] mx-auto justify-between items-center my-2'>
            <p className='text-[16px] font-calsans title_gradient leading-[48px] bg-[length:300%] bg-[left_top_-1rem] opacity-50'>© 2025 masbro. All rights reserve.</p>
            <div className="socialicons flex gap-4">
                <span className="cursor-pointer" onClick={()=>{window.open("https://github.com/masbroamat")}}><GitHubIcon sx={{ fontSize: 30}}/></span>
                <span className="cursor-pointer" onClick={()=>{window.open("https://www.linkedin.com/in/syazwan-yacob/")}}><LinkedInIcon sx={{ fontSize: 30}}/></span>
            </div>
        </div>
    </div>
  )
}

export default Footer