import "./index.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Home from "../Home";
import About from "../About";
import DentalTreatments from "../DentalTreatments";
import TreatmentCharges from "../TreatmentCharges";
import DentalTourism from "../DentalTourism";
import Faqs from "../Faqs";

const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="intro-text">
          <h1>
            Aurobindo Dental Hospital
            <br />
            Best Dental Hospital in Hyderabad
          </h1>
          <p>
            Experience world-class dental care with expert doctors and advanced
            technology to make your smile perfect.
          </p>

          <div className="contact-info">
            <p>
              <BsFillTelephoneFill /> 9866937777 / 9032018887 / 9347294612
            </p>
          </div>

          <div className="intro-social-icons">
            <a
              href="https://www.facebook.com/aurobindodental"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/aurobindodentalhospital/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/dentalaurobindo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/company/aurobindodentalhospital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <button className="intro-book-btn">Book Demo</button>
        </div>

        <div className="intro-image">
          <img
            src="https://res.cloudinary.com/daehuqvdc/image/upload/v1760954207/With_a_heart_full_of_gratitude_and_joy_I_m_beyond_excited_to_share_that_I_ve_been_accepted_into_dental_school_and_will_soon_begin_my_jo_ynimnu.jpg"
            alt="Dental care"
          />
        </div>
      </section>
      <Home />
      <About />
      <DentalTreatments />
      <TreatmentCharges />
      <DentalTourism />
      <Faqs />
    </>
  );
};

export default Intro;
