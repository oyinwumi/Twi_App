import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';

 import Footer from "./component/Footer"
import Nav from "./component/Nav"
import LandingPage from "./pages/LandingPage"
import Terms from './pages/Terms';


function App() {

  return (
     <div className="overflow-x-hidden">
      <Router>
      <Nav/>

         <Routes>
            <Route path='/' element={<LandingPage/>
}/>
            <Route path='/terms' element={<Terms/>
}/>
         </Routes>
         <Footer/>

      </Router>
     
     </div>
  )
}

export default App
