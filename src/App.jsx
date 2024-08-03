import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ForgotPassword from "./pages/ForgotPassword"
import Profile from './pages/Profile'
import Home from './pages/Home'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from "./components/Header"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function App() {

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/offers" element={<Offers />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
        </Routes>
      </Router>
      <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
    </div>
  )
}

export default App
