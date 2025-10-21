// import React, { useState } from "react";
// import "./index.css";
// import { IoMdMenu } from "react-icons/io";
// import { MdClose } from "react-icons/md";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="logo-container">
//         <img
//           src="https://res.cloudinary.com/daehuqvdc/image/upload/v1760938281/ffd2d5f2-5db6-4c4a-96bb-80e6745f2663_ohatfx.jpg"
//           alt="image-logo"
//           className="logo"
//         />
//         <h1>Dental</h1>
//       </div>
//       <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//         {menuOpen ? (
//           <MdClose size={30} color="white" />
//         ) : (
//           <IoMdMenu size={30} color="white" />
//         )}
//       </div>
//       <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//         <li>
//           <a href="/home">HOME</a>
//         </li>
//         <li>
//           <a href="/about">ABOUT US</a>
//         </li>
//         <li>
//           <a href="/services">DENTAL TREATMENTS</a>
//         </li>
//         <li>
//           <a href="/portfolio">TREATMENT CHARGES</a>
//         </li>
//         <li>
//           <a href="/portfolio">DENTAL TOURISM</a>
//         </li>
//         <li>
//           <a href="contact">CONTACT US</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import "./index.css";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img
          src="https://res.cloudinary.com/daehuqvdc/image/upload/v1760938281/ffd2d5f2-5db6-4c4a-96bb-80e6745f2663_ohatfx.jpg"
          alt="image-logo"
          className="logo"
        />
        <h1>Dental</h1>
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
          <Link to="/home" onClick={() => setMenuOpen(false)}>
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setMenuOpen(false)}>
            DENTAL TREATMENTS
          </Link>
        </li>
        <li>
          <Link to="/charges" onClick={() => setMenuOpen(false)}>
            TREATMENT CHARGES
          </Link>
        </li>
        <li>
          <Link to="/tourism" onClick={() => setMenuOpen(false)}>
            DENTAL TOURISM
          </Link>
        </li>
        <li>
          <Link to="/faqs" onClick={() => setMenuOpen(false)}>
            FAQS
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
