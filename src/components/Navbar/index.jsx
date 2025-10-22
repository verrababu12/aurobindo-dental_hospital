import React, { useState } from "react";
import "./index.css";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="logo-container" onClick={() => navigate("/")}>
        <img
          src="https://res.cloudinary.com/daehuqvdc/image/upload/v1760938281/ffd2d5f2-5db6-4c4a-96bb-80e6745f2663_ohatfx.jpg"
          alt="image-logo"
          className="logo"
        />
        <h1 className="navbar-heading">Dental<br/>Clinic</h1>
      </div>

      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <MdClose size={30} color="white" />
        ) : (
          <IoMdMenu size={30} color="white" />
        )}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="/home" onClick={() => setMenuOpen(false)}>
            HOME
          </a>
        </li>
        <li>
          <a href="/about" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </a>
        </li>
        <li>
          <a href="/services" onClick={() => setMenuOpen(false)}>
            DENTAL TREATMENTS
          </a>
        </li>
        <li>
          <a href="/charges" onClick={() => setMenuOpen(false)}>
            TREATMENT CHARGES
          </a>
        </li>
        <li>
          <a href="/tourism" onClick={() => setMenuOpen(false)}>
            DENTAL TOURISM
          </a>
        </li>
        <li>
          <a href="/faqs" onClick={() => setMenuOpen(false)}>
            FAQS
          </a>
        </li>
        <li>
          <a href="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT US
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
