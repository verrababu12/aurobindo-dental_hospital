// ContactUs.jsx
import "./index.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        <strong>Address:</strong>
      </p>
      <p>
        Flat no-503, 5th floor, MVS Heights, Vinayaka Nagar, Khanamet, Madhapur,
        Hyderabad-500081, Telangana.
      </p>
      <p>
        <strong>Phone:</strong> 9866937777 / 9032018887 / 9347294612
      </p>
      <p>
        <strong>Email:</strong> aurobindodental@gmail.com
      </p>
      <p>
        For more information, visit:{" "}
        <a
          href="http://www.aurobindodental.blogspot.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aurobindodental.blogspot.com
        </a>
      </p>
    </div>
  );
};

export default ContactUs;
