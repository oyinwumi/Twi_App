import Kids from "../assets/kidy.png";

const TwiTatic = () => {
  return (
    <div className="lg:px-20 px-8  font-font2 text-[#110F0F] flex lg:flex-row flex-col justify-between py-10   w-full bg-[#FFFFFF] ">
        <img src={Kids} alt=""  className=" lg:w-1/2 w-full  lg:mb-0 mb-8"/>
        <div className="lg:mt-20">
           <h2 className="font-bold lg:w-[636px] text-3xl mb-2">KIDS Get ready for a Twi-tastic adventure!</h2>
           <p className="font-normal text-xl lg:w-[636px]">Our playful mobile app turns learning Twi into a super fun quest. Join the language party where every tap is a high-five, and every lesson is a magical journey into the world of cool words and awesome culture! {`let's`} Twi together and make language learning a blast! Dive into an immersive learning experience with our mobile app, where every tap is a step towards fluency, and every lesson is a window into the heart of Ghana.</p>
        <div className="flex gap-10 items-center mt-10" >
             <button className="text-sm bg-[#B01D75] text-center text-white w-[248px] h-[56px] border-yellow rounded-lg md:text-[22px] font-semibold font-font2 ">Download For Android</button>
             <button className= " text-sm bg-[#B01D75] text-center text-white w-[248px] h-[56px] border-yellow rounded-lg md:text-[22px] font-semibold font-font2">Download For Iphone</button>
           </div>  
         </div>
    </div>
  )
}

export default TwiTatic