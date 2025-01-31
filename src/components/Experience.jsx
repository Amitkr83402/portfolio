import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimesCircle } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import experiences from "../constants/experiences.json";
import certifications from "../constants/certifications.json";

const JobExperienceCard = ({ experience, onClick }) => (
  <VerticalTimelineElement
    
    contentStyle={{ position: "relative" }}
    date={<span className="text-darkDesert">{experience.timePeriod}</span>}
  >
    <h3 className="text-2xl font-bold text-darkDesert">{experience.title}</h3>
    <p className="text-xl text-darkDesert italic mb-4">{experience.company}</p>
    <div className="flex justify-between items-center">
      <button
        className="text-darkDesert font-bold hover:text-goldDesert"
        onClick={onClick}
      >
        Read more...
      </button>
    </div>
  </VerticalTimelineElement>
);

const NonDevExperienceCard = ({ experience, onClick }) => (
  <VerticalTimelineElement
    icon={
      <img
        src={experience.img}
        alt={experience.title}
        className="h-full w-full rounded-full block"
      />
    }
    contentStyle={{ position: "relative" }}
    date={<span className="text-darkDesert">{experience.timePeriod}</span>}
  >
    <h3 className="text-2xl font-bold text-darkDesert">{experience.title}</h3>
    <p className="text-xl text-darkDesert italic mb-2">{experience.company}</p>
    <div className="flex justify-between items-center">
      <button
        className="text-darkDesert font-bold hover:text-goldDesert"
        onClick={onClick}
      >
        Read more...
      </button>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const [modalContent, setModalContent] = useState(null);

  // Check if the modal content corresponds to a certificate
  const isCertification = modalContent && certifications.some(cert => cert.id === modalContent.id);

  return (
    <div
      id="experience"
      className="bg-lightDesert p-10 rounded-lg w-full h-auto"
    >
      <h2 className="text-4xl font-bold text-darkDesert mb-4 text-center">
        Experience
      </h2>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <JobExperienceCard 
            key={index} 
            experience={experience}  
            onClick={() => setModalContent(experience)}
          />
        ))}
      </VerticalTimeline>

      <h2 className="text-4xl font-bold text-darkDesert mt-6 mb-4 text-center">
        Certification
      </h2>
      <VerticalTimeline>
        {certifications.map((experience) => (
          <NonDevExperienceCard
            key={experience.id}
            experience={experience}
            onClick={() => setModalContent(experience)}
          />
        ))}
      </VerticalTimeline>

      {/* Modal for Certificate Display */}
      <Modal
        isOpen={!!modalContent}
        onRequestClose={() => setModalContent(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-6"
        overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
      >
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 md:space-y-0 max-w-3xl w-full overflow-y-auto relative">
          <button
            onClick={() => setModalContent(null)}
            className="absolute top-4 right-4 text-darkDesert hover:text-goldDesert"
          >
            <FaTimesCircle size={32} />
          </button>
          <div className="flex flex-col items-center">
            <h3 className="text-darkDesert text-2xl font-bold mb-2 text-center">
              {modalContent?.title}
            </h3>
            <p className="text-darkDesert mb-2 text-center">{modalContent?.company}</p>
            <p className="text-darkDesert text-lg text-center mb-4">{modalContent?.description}</p>
            <p className="text-darkDesert font-bold">{modalContent?.timePeriod}</p>
            
            {/* Display Extended Certificate Image */}
            {isCertification && modalContent?.img && (
              <div className="mt-4 flex justify-center">
                <img
                  src={modalContent.img}
                  alt="Certificate"
                  className="w-full max-w-2xl rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                />
              </div>
            )}

            {/* Display Regular Experience Image */}
            {!isCertification && modalContent?.img && (
              <div className="mt-4 flex justify-center">
                <img
                  src={modalContent.img}
                  alt="Experience"
                  className="h-24 w-24 rounded-full shadow-lg"
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
