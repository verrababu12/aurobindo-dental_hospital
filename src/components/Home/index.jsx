import "./index.css";
import { useLocation } from "react-router-dom";

const HomeSection = () => {
  const location = useLocation();
  const snippet = location.state?.snippet;
  return (
    <>
      {snippet && <p className="snippet-box">{snippet}</p>}
      <section className="home-section">
        <div className="home-image">
          <img
            src="https://res.cloudinary.com/daehuqvdc/image/upload/v1760957037/Dentist_examines_the_patients_teeth_at_t_eafr4f.jpg"
            alt="Aurobindo Dental Team"
          />
        </div>

        <div className="home-content">
          <h2>Aurobindo Dental Hospital</h2>
          <p>
            Aurobindo Dental Hospital is one of the best dental hospitals in
            Madhapur, Hyderabad, India. We have 15+ years of experienced
            dentists working with us, offering all dental treatments at
            affordable costs.
          </p>
          <p>
            Our dental treatments include Invisible Aligners, Dental Braces,
            Root Canal Treatments, Wisdom Tooth Removal, Dentures, and Teeth
            Whitening.
          </p>
          <button className="read-more-btn">Read More →</button>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
