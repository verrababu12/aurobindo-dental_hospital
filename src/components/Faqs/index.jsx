import React, { useState } from "react";
import "./index.css";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsData = [
    {
      question: "What to Look For When Choosing a Dentist?",
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
      question: "Why is it Important to Visit a Dentist Regularly?",
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
      question: "How to Choose Dental Implant Specialists?",
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
    {
      question: "How much experience do you have in dental implant surgery?",
      answer: `• The number of implant cases they have performed and how often.

• Their continuing education and contributions to scientific literature.

• Their training in dental implant surgery and treatment of complications

• Speaking to their patients.

• How much the staff knows about dental implant surgery (their support is valuable).

• Photos of successful dental implant procedures they have performed`,
    },
    {
      question: "What Does an Endodontist Do?",
      answer: `You would choose an endodontist when you need a dental professional who specializes in root canals or other treatments which may involve the inside of the tooth, the pulp. An endodontist may use advanced technologies, such as digital imaging, operating microscopes and ultrasonic equipment in the diagnosis and treatment of dental issues in your mouth. An endodontist may also treat facial trauma. An endodontist will:

• Examine, diagnose and treat diseases of the pulp and dental tissues in your mouth.

• Develop a treatment plan to address and repair the diagnosed issues.

• Treat exposed pulp by capping or removal it.

• Fill the empty pulp chamber with endodontic materials to replace the pulp which has been removed.

• Where possible, the endodontist will reinsert and restore any teeth knocked out during an accident or collision.

• On occasion, the endodontist will bleach discolored teeth to maintain an even appearance of color in your mouth.`,
    },
    {
      question: "How to Choose an Endodontist?",
      answer: `• Find out if the endodontist is using the latest technology and procedures to minimize pain and maximize your results.`,
    },
    {
      question: "What Does a Periodontist Do?",
      answer: `A periodontist specializes in treating diseases of the gums and soft tissues. If you have severe gum disease, inflammation or bone loss, or persistent bad breath you may need to choose a periodontist. Sometimes this dental specialist may become involved if your case involves a large number of dental implants. A periodontist may treat dental diseases such as gingivitis and may also perform certain cosmetic procedures. A periodontist will:

• Examine, diagnose and treat infections and inflammations of the bone and soft tissues surrounding your teeth.

• Perform a deep cleaning of the teeth to eliminate irritating filling margins and correct occlusions.

• Remove diseased tissue and use cosmetic procedures to restore the appearance of the gum line around the teeth.

• Install dental implants or mini-implants to serve as an anchor for crowns or false teeth. This may require bone augmentation procedures if the patient has suffered bone loss.

• Restore lost bone and gum support by performing bone regenerative procedures.

• Help in the oral care and treatment for patients with certain diseases such as diabetes.

• Provide education on proper oral care techniques.`,
    },
    {
      question: "How to Choose a Periodontist?",
      answer: `• Find out if the periodontist is using the latest equipment and procedures to minimize pain and maximize results.`,
    },
    {
      question: "What Does a Pedodontist Do?",
      answer: `If you’ve got small children, you may want to choose a pedodontist or pediatric dentist for dental care. Oral hygiene can begin as soon as you bring your newborn home from the hospital. You should schedule the first dental appointment as soon as baby teeth appear, but definitely by the first birthday. Similar to a pediatrician who meets the health needs of children, a pedodontist specializes in meeting the special needs of working with the teeth of toddlers and adolescents. A pedodontist has special skills and knowledge about working with the mouths of developing children. The pedodontist may perform all the activities of a dentist such as filling cavities, extracting teeth, and diagnosing dental disease, but with a special focus on performing these treatments in the smaller mouths of younger patients. A pedodontist is also important in the early education of younger patients regarding lifetime oral wellness and proper dental hygiene techniques. A pedodontist will:

• Examine, diagnose and treat dental issues in pediatric patients.

• Make space maintainers as necessary to maintain proper alignment in adolescent teeth.

• Treat primary and secondary teeth to insure proper alignment and placement as the child’s mouth grows.

• Manage and treat children with special dental needs and requirements.

• Advise parents and caregivers on dental concerns.

• Provide preventive dental care through fluoride or sealants where applicable.

• Provide the child and parent with an education regarding the need for proper oral hygiene.`,
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
