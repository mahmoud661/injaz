import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import SubServicesPage from "./pages/SubServicesPage";
import Servicespage from "./pages/Services";
import Providerstudents from "./pages/Providerstudnts";
import StudentProfile from "./pages/StudentProfile";
import ChangePassword from "./pages/ChangePassword";
import CardInfo from "./pages/CardInfo";

import AddService from "./pages/AddService";
import UpdateService from "./pages/UpdateService"; // ✅ استيراد صفحة التعديل

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/servicespage" element={<Servicespage />} />
            <Route
              path="/services/:serviceName"
              element={<SubServicesPage />}
            />
            <Route
              path="/providerstudents/:subServiceId"
              element={<Providerstudents />}
            />
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/card-info" element={<CardInfo />} />
            <Route path="/AddService" element={<AddService />} />
            <Route
              path="/update-service/:serviceId"
              element={<UpdateService />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
