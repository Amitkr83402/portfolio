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
    icon={
      <img
        src={experience.img}
        alt={experience.title}
        className="h-full w-full rounded-full block "
      />
    }
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

      <Modal
        isOpen={!!modalContent}
        onRequestClose={() => setModalContent(null)}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 "
        overlayClassName="bg-black bg-opacity-50 transition-opacity duration-500 ease-out"
      >
        <div className="bg-white p-6 rounded-lg shadow-2xl transform transition-transform duration-500 ease-out space-y-4 md:space-y-0 max-w-md max-h-[80vh] overflow-y-auto">
          <button
            onClick={() => setModalContent(null)}
            className="absolute top-2 right-2 text-darkDesert hover:text-goldDesert"
          >
            <FaTimesCircle size={32} />
          </button>
          <div>
            <h3 className="text-darkDesert text-2xl font-bold mb-4">
              {modalContent?.title}
            </h3>
            <p className="text-darkDesert mb-4">{modalContent?.company}</p>
            <p className="text-darkDesert mb-4">{modalContent?.description}</p>
            <p className="text-darkDesert font-bold">
              {modalContent?.timePeriod}
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Experience;
