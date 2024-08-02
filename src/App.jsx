import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ForgotPassword from "./pages/ForgotPassword"
import Profile from './pages/Profile'
import Home from './pages/Home'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from "./components/Header"
 

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
    </div>
  )
}

export default App
