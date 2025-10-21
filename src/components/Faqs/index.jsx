import React, { useState } from "react";
import "./index.css";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsData = [
    {
      question: "What to Look For When Choosing a Dentist",
      answer: `
Finding the right dentist for you and your family can be as taxing as finding a parking space in a crowded shopping center.
With thousands of dentists practicing all over the country — each with their own specializations and schedules — choosing the right one is crucial.

Here are some key points to consider:
• Why are you seeing a dentist? General dentists can handle most treatments, but specialists exist for children (Pedodontist), cosmetic dentistry, braces (Orthodontist), implants, and more.
• What location and timings are convenient for you?
• Check qualifications like BDS or MDS.
• Ask about equipment, emergency handling, and patient education.
• Get recommendations or testimonials from patients and friends.
Visit the clinic, meet the dentist, and discuss any special needs before deciding.
`,
    },
    {
      question: "Why is it Important to Visit a Dentist Regularly",
      answer: `
Regular dental visits prevent problems and catch small issues before they worsen.
Skipping checkups can lead to more expensive treatments later.

Benefits include:
• Early detection and treatment of dental problems.
• Cleaner, healthier teeth and gums.
• Better eating habits — strong teeth help you enjoy nutritious foods.
• Prevention of gum disease-related health risks like heart problems.
• Early detection of oral cancer.
• Fresher breath and a confident smile.
`,
    },
    {
      question: "How to Choose Dental Implant Specialists",
      answer: `
Choosing the right implant specialist is critical for safety and long-term success.

Many general practitioners take short implant courses, but surgical specialists (oral surgeons, periodontists) handle these procedures regularly.
Their expertise ensures:
• Mastery of surgical techniques.
• Accurate diagnosis.
• Ability to prevent and manage complications.

Implant surgery has a high success rate when done by trained professionals. Always ask about your dentist’s qualifications and experience with implants before starting treatment.
`,
    },
    {
      question:
        "Are You Considering Dental Implants? Make an Informed Decision",
      answer: `Protect your oral health – make an informed decision when considering dental implants or any other surgical procedure. Ask your physician these questions when seeking a procedure.`,
    },
  ];

  return (
    <section className="faqs-section">
      <h2>FAQs</h2>
      <div className="faqs-container">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <h3 onClick={() => toggleFaq(index)}>{faq.question}</h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
