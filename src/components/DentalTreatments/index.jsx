// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./index.css";

// const DentalTreatments = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="dental-section" id="treatments">
//       <h2 className="section-title">DENTAL TREATMENTS</h2>
//       <p className="section-subtitle">
//         We offer these Dental speciality treatments at affordable prices.
//       </p>

//       <div className="treatment">
//         <h3>ENDODONTICS</h3>
//         <p>
//           Endodontists are dentists who specialize in maintaining teeth through
//           endodontic therapy — procedures involving the soft inner tissue of the
//           teeth, called the pulp. It includes preserving or removing the pulp in
//           irreversible disease, treating inflamed or infected tissue, and
//           preserving teeth that failed to respond to previous treatments.
//         </p>
//       </div>

//       <div className="treatment">
//         <h3>PEDODONTICS</h3>
//         <p>
//           Pedodontists provide dental health care to children — from infants to
//           adolescents. They ensure children’s oral health and educate parents on
//           proper dental hygiene for kids.
//         </p>
//       </div>

//       <div className="treatment">
//         <h3>ORTHODONTICS</h3>
//         <p>
//           Orthodontics deals with malpositioned teeth and jaws, focusing on
//           their diagnosis, prevention, and correction. Orthodontists improve
//           smiles by correcting teeth alignment and guiding proper facial
//           development.
//         </p>
//       </div>

//       <div className="treatment">
//         <h3>COSMETIC DENTISTRY</h3>
//         <p>
//           Cosmetic dentistry enhances the appearance of teeth, gums, and bite.
//           It focuses on improving aesthetics such as color, shape, and
//           alignment. Common treatments include:
//         </p>
//         <ul>
//           <li>Teeth Whitening – removes stains and discoloration.</li>
//           <li>
//             Veneers – porcelain shells that cover front sides of teeth to change
//             shape or color.
//           </li>
//           <li>Crowns – caps that restore shape and appearance.</li>
//           <li>
//             Bridges – replace missing teeth with artificial ones anchored to
//             crowns.
//           </li>
//         </ul>
//       </div>

//       <div className="treatment">
//         <h3>PERIODONTICS</h3>
//         <p>
//           Periodontists specialize in treating gum disease and placing dental
//           implants. They perform procedures like scaling, root planing, and
//           surgeries for severe gum issues.
//         </p>
//       </div>

//       <div className="treatment">
//         <h3>ORAL AND MAXILLOFACIAL SURGERY</h3>
//         <p>
//           Oral surgeons handle complex dental surgeries, tooth extractions, jaw
//           corrections, TMJ issues, facial fractures, and oral cancer repair.
//         </p>
//       </div>

//       <div className="treatment">
//         <h3>PROSTHODONTICS</h3>
//         <p>
//           Prosthodontists design and construct oral prostheses to replace
//           missing teeth or structures, restoring chewing, speaking, and facial
//           aesthetics.
//         </p>
//       </div>

//       <div className="treatment">
//         <h3>DENTAL IMPLANTS</h3>
//         <p>
//           Dental implants are titanium fixtures surgically placed into the jaw
//           to support crowns, bridges, or dentures. They integrate with bone
//           (osseointegration) for permanent stability.
//         </p>
//       </div>

//       <div className="treatment">
//         <h3>ORAL MEDICINE AND RADIOLOGY</h3>
//         <p>
//           Oral Medicine focuses on diagnosing and managing diseases affecting
//           the mouth and jaw. Oral Radiology captures and examines dental x-rays
//           for accurate diagnosis.
//         </p>
//       </div>
//       <div className="read-more-container">
//         <button onClick={() => navigate("/prices")} className="read-more-btn">
//           Read More →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default DentalTreatments;
import React, { useState } from "react";
import "./index.css";

const DentalTreatments = () => {
  const [showPrices, setShowPrices] = useState(false);

  return (
    <section className="dental-section" id="treatments">
      <h2 className="section-title">DENTAL TREATMENTS</h2>
      <p className="section-subtitle">
        We offer these Dental speciality treatments at affordable prices.
      </p>

      {!showPrices ? (
        <>
          <div className="treatment">
            <h3>ENDODONTICS</h3>
            <p>
              Endodontists are dentists who specialize in maintaining teeth
              through endodontic therapy — procedures, involving the soft inner
              tissue of the teeth, called the pulp. In clinical terms,
              endodontics involves either preserving part, or all of the dental
              pulp in health, or removing all of the pulp in irreversible
              disease. This includes teeth with irreversible inflamed and
              infected pulpal tissue. Not only does endodontics involve
              treatment when a dental pulp is present, but also includes
              preserving teeth which have failed to respond to non-surgical
              endodontic treatment, or for teeth that have developed new
              lesions.
            </p>
          </div>

          <div className="treatment">
            <h3>PEDODONTICS</h3>
            <p>
              Pedodontist is a healthcare professional specialized in providing
              childhood dental health and care to young patients’ (infants,
              children and adolescents). Pediatric dentists[5] promote the
              dental health of children as well as serve as educational
              resources for parents.
            </p>
          </div>

          <div className="treatment">
            <h3>ORTHODONTICS</h3>
            <p>
              Orthodontics is a specialised field of dentistry that deals
              primarily with malpositioned teeth and the jaws: their diagnosis,
              prevention and correction. Orthodontists are specialized dentists
              who work to improve their patients’ smiles through correcting
              teeth alignment and guiding proper facial development.
            </p>
          </div>

          <div className="treatment">
            <h3>COSMETIC DENTISTRY</h3>
            <p>
              Cosmetic dentistry is generally used to refer to any dental work
              that improves the appearance of teeth, gums and/or bite. It
              primarily focuses on improvement dental aesthetics in colour,
              position, shape, size, alignment and overall smile appearance.
              Some of the most common treatments are:- 1) Teeth Whitening- Over
              time, teeth can become stained or discolored, especially after
              smoking, taking certain medications, or consuming foods and
              beverages such as coffee and tea. Using a chemical process, your
              dentist can bleach your teeth in one of two ways. He can do an
              in-office procedure, or provide you with a system to use at home.
              2) Veneers- These custom shells, typically made of porcelain
              (sometimes plastic), cover the front sides of the teeth to change
              their color and/or shape. 3)Crowns- Sometimes called caps, crowns
              completely cover a tooth, restoring a normal shape and appearance
              4) Bridges- Sometimes called a fixed partial denture, bridges are
              used to replace missing teeth with artificial teeth. Bridges can
              be made of gold, alloys, porcelain, or a combination. Dentists
              anchor them onto surrounding teeth after preparing them for
              crowns. Then a false tooth joins to the crowns and the bridge is
              cemented onto the prepared teeth. Only your dentist can remove a
              fixed bridge.
            </p>
          </div>
          <div className="treatment">
            <h3>PERIODONTICS</h3>
            <p>
              A periodontist is a dentist who specializes in the prevention,
              diagnosis, and treatment of periodontal disease, and in the
              placement of dental implants.Periodontists are also experts in the
              treatment of oral inflammation. Periodontists offer a wide range
              of treatments, such as scaling and root planing (in which the
              infected surface of the root is cleaned) or root surface
              debridement (in which damaged tissue is removed). They can also
              treat patients with severe gum problems using a range of surgical
              procedures. In addition, periodontists are specially trained in
              the placement, maintenance, and repair of dental implants.
            </p>
          </div>
          <div className="treatment">
            <h3>ORAL AND MAXILLOFACIAL SURGERY</h3>
            <p>
              For some very serious dental reconstruction, you may need to
              choose an oral surgeon. An oral surgeon performs oral surgery on
              patients and may also be involved in difficult tooth extractions.
              The oral surgeon may perform surgery on the mouth, jaws, or other
              related areas of your head and neck. You might see an oral surgeon
              for temporomandibular joint (TMJ) problems, repair of broken bones
              in the face or jaws, birth defects of the face or mouth, or
              surgery to repair damage caused by oral cancer.
            </p>
          </div>
          <div className="treatment">
            <h3>PROSTHODONTICS</h3>
            <p>
              Construct oral prostheses to replace missing teeth and other oral
              structures to correct natural and acquired deformation of mouth
              and jaws, to restore and maintain oral function, such as chewing
              and speaking, and to improve appearance.
            </p>
          </div>
          <div className="treatment">
            <h3>DENTAL IMPLANTS</h3>
            <p>
              A dental implant (also known as an endosseous implant or fixture)
              is a surgical component that interfaces with the bone of the jaw
              or skull to support a dental prosthesis such as a crown, bridge,
              denture, facial prosthesis or to act as an orthodontic anchor. The
              basis for modern dental implants is a biologic process called
              osseointegration, in which materials such as titanium form an
              intimate bond to bone. The implant fixture is first placed so that
              it is likely to osseointegrate, then a dental prosthetic is added.
              A variable amount of healing time is required for osseointegration
              before either the dental prosthetic (a tooth, bridge or denture)
              is attached to the implant or an abutment is placed which will
              hold a dental prosthetic.
            </p>
          </div>
          <div className="treatment">
            <h3>ORAL MEDICINE AND RADIOLOGY</h3>
            <p>
              Oral medicine is the speciality of dentistry that is concerned
              with diagnosis and management of disorders or condition affecting
              the oral and maxillofacial region. Oral Radiology is the branch of
              dentistry that deals with capturing of x-rays of the oral and
              maxillofacial region and examining them to reach an appropriate
              diagnosis.
            </p>
          </div>

          <div className="read-more-container">
            <button
              onClick={() => setShowPrices(true)}
              className="read-more-btn"
            >
              Read More →
            </button>
          </div>
        </>
      ) : (
        <div className="prices-section">
          <h2 className="section-title">PRICES</h2>
          <p className="date-line">January 13, 2023 | No Comments</p>
          <p className="intro-text">
            We offer all Dental treatments at affordable cost.
          </p>

          <div className="price-list">
            <p>Invisible aligners – ₹95,000</p>
            <p>Dental Braces – From ₹35,000</p>
            <p>Root Canal Treatments – From ₹4,000</p>
            <p>Wisdom Tooth Removal – From ₹4,000</p>
            <p>Dentures – From ₹25,000</p>
            <p>Teeth Whitening – From ₹10,000</p>
            <p>Dental Implants – From ₹25,000</p>
            <p>Dental Veneers – From ₹10,000</p>
            <p>TMJ Pain Treatment – From ₹4,000</p>
            <p>Tooth Extraction – From ₹1,000</p>
            <p>Cosmetic Dentistry – From ₹5,000</p>
          </div>

          <div className="read-more-container">
            <button
              onClick={() => setShowPrices(false)}
              className="read-more-btn"
            >
              ← Back
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default DentalTreatments;
