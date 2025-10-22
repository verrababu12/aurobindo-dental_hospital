// Footer.jsx
import "./index.css";
import Search from "../Search";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>
          <MdLocationPin className="contact-icon" />
          Flat no-503, 5th floor, MVS Heights, Vinayaka Nagar, Khanamet,
          Madhapur, Hyderabad-500081, Telangana.
        </p>
        <p>
          <BsFillTelephoneFill className="contact-icon" />
          Phone: 9866937777 / 9032018887 / 9347294612
        </p>
        <p>
          <CgMail className="contact-icon" /> Email: aurobindodental@gmail.com
        </p>

        <div className="footer-intro-social-icons">
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
      </div>
      <Search />

      <div className="footer-form">
        <h3>Leave a Reply</h3>
        <p>
          Your email address will not be published. Required fields are marked{" "}
          <span className="required">*</span>
        </p>
        <form>
          <label>
            Comment <span className="required">*</span>
            <br />
            <textarea required rows="4"></textarea>
          </label>
          <label>
            Name <span className="required">*</span>
            <br />
            <input type="text" required />
          </label>
          <label>
            Email <span className="required">*</span>
            <br />
            <input type="email" required />
          </label>
          <label>
            Website
            <br />
            <input type="url" />
          </label>

          <div className="footer-checkbox">
            <input type="checkbox" id="footerBox" />
            <label className="checkbox" htmlFor="footerBox">
              Save my name, email, and website in this browser for the next time
              I comment.
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
