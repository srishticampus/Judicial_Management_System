
import './App.css';
import LandingNavbar from './Components/LandingPage/LandingNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingcarousel from './Components/LandingPage/Landingcarousel';
import AboutUs from './Components/Common/AboutUs';
import UserFooter from './Components/Common/UserFooter';
import LandingServices from './Components/LandingPage/LandingServices';
import ContactUs from './Components/Common/ContactUs';

function App() {
  return (
    <div className="App">
       <BrowserRouter basename="Judisys">
      <div>
        <Routes>
          {/* Common routes */}
          <Route path="/" element={(<LandingNavbar/>,<Landingcarousel/>)} />
          <Route path="/aboutus" element={[<LandingNavbar />,<AboutUs />,<UserFooter />]} />
          <Route path="/services" element={[<LandingNavbar />,<LandingServices/>,<UserFooter />]} />
          <Route path="/contactus" element={[<LandingNavbar />,<ContactUs />,<UserFooter />]} />
          </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
