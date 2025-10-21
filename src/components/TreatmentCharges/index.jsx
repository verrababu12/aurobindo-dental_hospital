import React, { useState } from "react";
import "./index.css";

const TreatmentCharges = () => {
  const [showFullPrices, setShowFullPrices] = useState(false);

  return (
    <section className="charges-section">
      <h2 className="section-title">TREATMENT CHARGES</h2>
      <p className="treatment-intro-text">
        We offer all Dental treatments at affordable cost. Treatment Charges at
        our hospital in- 2022-2023.
      </p>

      {/* Basic Prices */}
      {!showFullPrices && (
        <div className="price-list">
          <p>Invisible aligners – ₹95,000</p>
          <p>Dental Braces – From ₹35,000</p>
          <p>Root canal treatments – From ₹4,000</p>
          <p>Wisdom tooth removal – From ₹4,000</p>
          <p>Dentures – From ₹25,000</p>
          <p>Teeth whitening – From ₹10,000</p>
          <p>Dental implants – From ₹25,000</p>
          <p>Dental Veneers – From ₹10,000</p>
          <p>TMJ Pain treatment – From ₹4,000</p>
          <p>Tooth extraction – From ₹1,000</p>
          <p>Cosmetic dentistry – From ₹5,000</p>
          <button
            className="read-more-btn"
            onClick={() => setShowFullPrices(true)}
          >
            Read Full Price List →
          </button>
        </div>
      )}

      {/* Full Prices */}
      {showFullPrices && (
        <div className="price-list full-prices">
          <p>Invisible aligners – ₹95,000</p>
          <p>Dental Braces – From ₹35,000</p>
          <p>Root canal treatments – From ₹4,000</p>
          <p>Wisdom tooth removal – From ₹4,000</p>
          <p>Dentures – From ₹25,000</p>
          <p>Teeth whitening – From ₹10,000</p>
          <p>Dental implants – From ₹25,000</p>
          <p>Dental Veneers – From ₹10,000</p>
          <p>TMJ Pain treatment – From ₹4,000</p>
          <p>Tooth extraction – From ₹1,000</p>
          <p>Cosmetic dentistry – From ₹5,000</p>
          <p>Porcelain fused to metal crown – ₹6,000 onwards</p>
          <p>Zirconia metal free ceramic crown – ₹6,000 onwards</p>
          <p>IPS e.max crown – ₹6,000 onwards</p>

          <h3>Full Mouth Rehabilitation (6–8 Dental Implants) – Per Jaw</h3>
          <p>Alpha Bio implants + Zirconium Bridge – ₹2,50,000 onwards</p>
          <p>Nobel Biocare implants + Zirconium Bridge – ₹3,50,000 onwards</p>

          <h3>All-on-4 Dental Implants – Per Jaw</h3>
          <p>
            4 Nobel Biocare implants + immediate provisional denture + final
            Nobel Procera Titanium/Zirconium – ₹3,00,000 onwards
          </p>

          <h3>Dental Braces Cost in Hyderabad</h3>
          <p>Metal braces (straight wire) – ₹35,000 onwards</p>
          <p>Metal braces (Self-Ligating) – ₹55,000 onwards</p>
          <p>Ceramic braces (straight wire) – ₹45,000 onwards</p>
          <p>Ceramic braces (Self-Ligating) – ₹75,000 onwards</p>
          <p>Lingual braces – ₹1,00,000 onwards</p>
          <p>Invisalign – ₹1,20,000 onwards</p>

          <h3>Veneers & Teeth Whitening</h3>
          <p>Composite Veneers (per veneer) – ₹7,000</p>
          <p>Porcelain Veneers (per laminate) – ₹12,000</p>
          <p>Chemically Activated System (in-office) – ₹10,000</p>
          <p>Light Activated System (ZOOM) – ₹12,000</p>

          <p className="treatment-contact-info">
            For details please contact: 9866937777 / 9032018887
          </p>

          <button
            className="read-more-btn"
            onClick={() => setShowFullPrices(false)}
          >
            ← Show Less
          </button>
        </div>
      )}
    </section>
  );
};

export default TreatmentCharges;
