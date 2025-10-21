// Footer.jsx
import "./index.css";
import Search from "../Search";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>
          Flat no-503, 5th floor, MVS Heights, Vinayaka Nagar, Khanamet,
          Madhapur, Hyderabad-500081, Telangana.
        </p>
        <p>Phone: 9866937777 / 9032018887 / 9347294612</p>
        <p>Email: aurobindodental@gmail.com</p>
      </div>
      <Search />

      <div className="footer-form">
        <h3>Leave a Reply</h3>
        <p>
          Your email address will not be published. Required fields are marked *
        </p>
        <form>
          <label>
            Comment *<br />
            <textarea required rows="4"></textarea>
          </label>
          <label>
            Name *<br />
            <input type="text" required />
          </label>
          <label>
            Email *<br />
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
