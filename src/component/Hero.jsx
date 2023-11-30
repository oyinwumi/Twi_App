import Heross from "../assets/hero1.png";
import Heros from "../assets/hero2.png";


const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-[#CCCCCC] lg:px-20 px-8  pb-12 flex lg:flex-row flex-col items-center justify-between  border-b border-[#FFFFFF">
       <div className="text-[#110F0F]  flex flex-col font-normal lg:mb-0 mb-8 ">
          <h1 className="font-font1 text-[43px] lg:w-[546px]">Embark on a vibrant TWI Language journey</h1>
          <p className="text-xl font-font2 lg:w-[546px] my-6">Learn Twi effortlessly with our mobile application, where culture meets convenience, and every lesson brings you one step closer to fluent, joyful communication!</p>
          <img src={Heross} alt=""  className=" lg:mt-0 mt-8"/>
       </div>
       <div className="object-cover">
        <img src={Heros} alt="" />
       </div>
    </div>
  )
}

export default Hero