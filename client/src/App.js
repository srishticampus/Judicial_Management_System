
import './App.css';
import LandingNavbar from './Components/LandingPage/LandingNavbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'remixicon/fonts/remixicon.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingcarousel from './Components/LandingPage/Landingcarousel';
import AboutUs from './Components/Common/AboutUs';
import UserFooter from './Components/Common/UserFooter';
import LandingServices from './Components/LandingPage/LandingServices';
import ContactUs from './Components/Common/ContactUs';
import AdminLogin from './Components/Admin/Login/AdminLogin';
import AdminFooter from './Components/Admin/Common/AdminFooter';
import UserRegistration from './Components/User/UserRegistration';
import AdminMain from './Components/Admin/Dashboard/AdminMain';
import AdminNav from './Components/Admin/Common/AdminNav';
import ScrollToTop from './ScrollToTop';
import { ToastContainer, toast } from 'react-toastify';
import UserLogin from './Components/User/UserLogin';
import UserHome from './Components/User/UserHome';
import UserNavbar from './Components/User/UserNavbar';
import UserProfile from './Components/User/UserProfile';
import AdvcateReg from './Components/Advocates/AdvocateReg';
import AdvocateLogin from './Components/Advocates/AdvocateLogin';
import AdvocateHome from './Components/Advocates/AdvocateHome';
import AdvocateNavbar from './Components/Advocates/AdvocateNavbar';
import ViewProfile_AR from './Components/Admin/Dashboard/ViewProfile_AR';
import UserAddCases from './Components/User/UserAddCases';
import UserViewRecentCases from './Components/User/UserViewRecentCases';
import User_RequestAdvocate from './Components/User/User_RequestAdvocate';
import User_BookAppoinment from './Components/User/User_BookAppoinment';
import Advocate_ViewCaseRequest from './Components/Advocates/Advocate_ViewCaseRequest';
import AdvocateViewCaseReq from './Components/Advocates/AdvocateViewCaseReq';
import AdvocateEditProfile from './Components/Advocates/AdvocateEditProfile';

function App() {
  return (
    <div className="App">

      <BrowserRouter basename="judisys">
        <ScrollToTop />
        <ToastContainer
          autoClose={3000}  // 3 seconds default close time
          hideProgressBar={true}  // Hide progress bar globally
          position="top-right"  // Default position for all toasts
        />
        <div>
          <Routes>
            {/* Common routes */}
            <Route path="/" element={(<LandingNavbar />, <Landingcarousel />)} />
            <Route path="/aboutus" element={[<LandingNavbar />, <AboutUs />, <UserFooter />]} />
            <Route path="/services" element={[<LandingNavbar />, <LandingServices />, <UserFooter />]} />
            <Route path="/contactus" element={[<LandingNavbar />, <ContactUs />, <UserFooter />]} />



            {/* Admin  */}
            <Route path="/admin-login" element={[<LandingNavbar />, <AdminLogin />, <AdminFooter />]} />
            <Route path="/admin-dashboard" element={[<AdminNav />, <AdminMain data="admindashboard" />, <AdminFooter />]} />
            <Route path="/admin-viewallusers" element={[<AdminNav />, <AdminMain data="adminviewallusers" />, <AdminFooter />]} />
            <Route path="/admin-userreqs" element={[<AdminNav />, <AdminMain data="admin-userreqs" />, <AdminFooter />]} />
            <Route path="/admin-viewalladvocates" element={[<AdminNav />, <AdminMain data="adminviewalladvocates" />, <AdminFooter />]} />
            <Route path="/admin-adv-reqs" element={[<AdminNav />, <AdminMain data="admin-adv-reqs" />, <AdminFooter />]} />
            <Route path="/adminviewrequest/:id" element={[<AdminNav />, <AdminMain data="adminviewrequest" />, <AdminFooter />]} />
            <Route path="/admin_view_single_user/:id" element={[<AdminNav />, <AdminMain data="admin-view-single-user" />, <AdminFooter />]} />



            {/* user */}
            <Route path="/user-reg" element={[<LandingNavbar />, <UserRegistration />, <UserFooter />]} />
            <Route path="/user-login" element={[<LandingNavbar />, <UserLogin />, <UserFooter />]} />
            <Route path="/user-home" element={[<UserNavbar />, <UserHome />, <UserFooter />]} />
            <Route path="/user_profile" element={[<UserNavbar />, <UserProfile />, <UserFooter />]} />
            <Route path="/user_view_case" element={[<UserNavbar />, <UserViewRecentCases />, <UserFooter />]} />
            <Route path="/user-request-advocate/:id" element={[<UserNavbar />,<User_RequestAdvocate/>,<UserFooter/>]} />
            <Route path="/user_bookappoinment/:id/:cid" element={[<UserNavbar />,<User_BookAppoinment/>,<UserFooter/>]} />
            <Route path="/user_add_case" element={[<UserNavbar />, <UserAddCases />, <UserFooter />]} />



{/* Advocate */}
<Route path="/att-signup" element={[<LandingNavbar />, <AdvcateReg />, <UserFooter />]} />
<Route path="/advocate-login" element={[<LandingNavbar />, <AdvocateLogin />, <UserFooter />]} />
<Route path="/advocate-home" element={[<AdvocateNavbar />, <AdvocateHome />, <UserFooter />]} />
<Route path="/advocate_viewcasereq" element={[<AdvocateNavbar />, <Advocate_ViewCaseRequest/>, <UserFooter />]} />
<Route path="/advocate_view_single_case_req/:id" element={[<AdvocateNavbar />, <AdvocateViewCaseReq />,<UserFooter />]} />
<Route path="/advocate_edit_profile" element={[<AdvocateNavbar />, <AdvocateEditProfile />,<UserFooter />]} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
