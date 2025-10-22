import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Home from "./components/Home";
import Search from "./components/Search";
import About from "./components/About";
import DentalTreatments from "./components/DentalTreatments";
import TreatmentCharges from "./components/TreatmentCharges";
import DentalTourism from "./components/DentalTourism";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentSuccess from "./components/AppointmentSuccess";

import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/book-demo" element={<AppointmentForm />} />
        <Route path="/success" element={<AppointmentSuccess />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<DentalTreatments />} />
        <Route path="/charges" element={<TreatmentCharges />} />
        <Route path="/tourism" element={<DentalTourism />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
