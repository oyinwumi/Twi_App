import { Link } from "react-router-dom";
import Fb from "../assets/facebook.svg";
import Tw from "../assets/twitter.svg";
import Ig from "../assets/instagram.svg";
import Lin from "../assets/linkedin.svg";


const Footer = () => {
  return (
    <div className="lg:px-20 px-8 py-8 bg-[#E6E5F7] flex lg:flex-row flex-col  justify-between items-center text-[
        #252528] font-font2 text-xl">
   <div className="lg:mt-0 mt-5 lg:text-[16px] text-sm">
        <a href="" className="underline" >Click here to download</a>
      </div>
      <div className="">
        <h5 className="lg:my-0 my-5 lg:text-[16px] text-sm ">Learn Twi Language in the simplest way there is!</h5>
        <div className="flex gap-7 mt-4 items-center lg:mx-0 mx-auto justify-center">
            <a href=""><img src={Fb} alt="" /></a>
            <a href=""><img src={Tw} alt="" /></a>
            <a href=""><img src={Ig} alt="" /></a>
            <a href=""><img src={Lin} alt="" /></a>
        </div>
      </div>
      <Link to="/terms"  className="lg:mt-0 mt-5 lg:text-[16px] text-sm underline">Terms and Conditions</Link>

    </div>  )
}

export default Footer