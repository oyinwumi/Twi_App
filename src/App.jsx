import Footer from "./component/Footer"
import Nav from "./component/Nav"
import LandingPage from "./pages/LandingPage"


function App() {

  return (
     <div className="overflow-x-hidden">
      <Nav/>
      <LandingPage/>
      <Footer/>
     </div>
  )
}

export default App
