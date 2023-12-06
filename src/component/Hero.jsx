import Heross from "../assets/hero1.png";
import Heros from "../assets/hero2.png";


const Hero = () => {
  return (
    <div className="bg-[#CCCCCC] lg:px-20 px-8  pb-10 flex lg:flex-row flex-col lg:items-center justify-between  ]">
       <div className="text-[#110F0F]  flex flex-col font-normal lg:mb-0 mb-8 lg:w-6/12 w-full ">
          <h1 className="font-font1 text-[43px] lg:w-[546px] w-full lg:order-1 order-1">Embark on a vibrant TWI Language journey</h1>
          <p className="text-xl font-font2 lg:w-[546px] w-full my-6 lg:order-2 order-3">Learn Twi effortlessly with our mobile application, where culture meets convenience, and every lesson brings you one step closer to fluent, joyful communication!</p>
          <img src={Heross} alt=""  className=" lg:mt-0 mt-8  lg:order-3 order-2"/>
       </div>
       <div className="object-cover lg:w-5/12 w-full ">
        <img src={Heros} alt="" className="w-full" />
       </div>
    </div>
  )
}

export default Hero