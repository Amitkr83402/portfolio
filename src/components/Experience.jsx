import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
import experiences from "../constants/experiences.json";
import certifications from "../constants/certifications.json";

const Experience = () => {
  const [modalContent, setModalContent] = useState(null);
  const isCertification = modalContent && certifications.some(cert => cert.id === modalContent.id);

  return (
    <div id="experience" className="bg-lightDesert p-10 rounded-lg w-full h-auto flex flex-col items-center">
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">Experience</h2>
      <div className="space-y-6 w-full max-w-3xl">
        {experiences.map((experience, index) => (
          <div key={index} className="border-l-4 border-goldDesert pl-4 text-center">
            <h3 className="text-2xl font-bold text-darkDesert">{experience.title}</h3>
            <p className="text-xl text-darkDesert italic">{experience.company} ({experience.timePeriod})</p>
            <button
              className="text-darkDesert font-bold hover:text-goldDesert mt-2"
              onClick={() => setModalContent(experience)}
            >
              Read more...
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold text-darkDesert mt-6 mb-4 text-center">Certifications</h2>
      <ul className="list-none space-y-4 w-full max-w-3xl">
        {certifications.map(cert => (
          <li key={cert.id} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center text-center">
            <div>
              <h3 className="text-2xl font-bold text-darkDesert">{cert.title}</h3>
              <p className="text-xl text-darkDesert italic">{cert.company} ({cert.timePeriod})</p>
            </div>
            <button
              className="text-darkDesert font-bold hover:text-goldDesert mt-2"
              onClick={() => setModalContent(cert)}
            >
              View
            </button>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={!!modalContent}
        onRequestClose={() => setModalContent(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
      >
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 max-w-3xl w-full overflow-y-auto relative text-center">
          <button
            onClick={() => setModalContent(null)}
            className="absolute top-4 right-4 text-darkDesert hover:text-goldDesert"
          >
            <FaTimesCircle size={32} />
          </button>
          <div className="flex flex-col items-center">
            <h3 className="text-darkDesert text-2xl font-bold mb-2 text-center">{modalContent?.title}</h3>
            <p className="text-darkDesert mb-2 text-center">{modalContent?.company}</p>
            <p className="text-darkDesert text-lg text-center mb-4">{modalContent?.description}</p>
            <p className="text-darkDesert font-bold">{modalContent?.timePeriod}</p>
            {isCertification && modalContent?.img && (
              <div className="mt-4 flex justify-center">
                <img
                  src={modalContent.img}
                  alt="Certificate"
                  className="w-full max-w-2xl rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Experience;
