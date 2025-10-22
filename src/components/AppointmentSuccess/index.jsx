import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const AppointmentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <h1> Appointment Booked Successfully!</h1>
      <p>Thank you for booking with Aurobindo Dental Hospital.</p>
      <p>We will contact you soon to confirm your appointment.</p>

      <button onClick={() => navigate("/")} className="back-btn">
        ← Back to Home
      </button>
    </div>
  );
};

export default AppointmentSuccess;
