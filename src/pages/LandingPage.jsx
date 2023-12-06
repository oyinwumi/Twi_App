import AppFunction from "../component/AppFunction"
import Hero from "../component/Hero"
import TwiTatic from "../component/TwiTatic"
import Purchase from "./purchase"

const LandingPage = () => {
  return (
    <div className="overflow-x-hidden">
        <Hero/>
        <TwiTatic/>
        <AppFunction/>
        <Purchase/>
    </div>
  )
}

export default LandingPage