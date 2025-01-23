import React, { memo, useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from "../constants/index";
import { useSpring, animated, config } from "react-spring";

const Anchor = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-2 text-darkDesert hover:text-goldDesert transition-colors duration-300"
    aria-label={`Link to ${href}`}
  >
    {children}
  </a>
);

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: config.slow,
  });

  const [scale, setScale] = useState(1);
  const springProps = useSpring({
    transform: `scale(${scale})`,
    config: config.wobbly,
  });

  const slideUp = useSpring({
    transform: "translate3d(0,0px,0)",
    from: { transform: "translate3d(0,40px,0)" },
    delay: 200,
  });

  return (
    <animated.div
      style={fadeIn}
      id="about"
      className="container mx-auto flex flex-col items-center justify-center bg-lightDesert p-10 h-auto"
    >
      <animated.img
        style={{ ...springProps }}
        src="images/profile.jpg"
        alt="Sara"
        className="rounded-full w-64 h-64 border-4 border-darkDesert object-cover mb-8 mt-20"
        onMouseEnter={() => setScale(1.1)}
        onMouseLeave={() => setScale(1)}
      />
      <animated.div style={slideUp}>
        <h1 className="text-4xl font-bold text-darkDesert mb-4 text-center px-8">
          Amit Kumar Yadav
        </h1>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
        A detailed-oriented, responsible, and committed Engineer with a get-it-done, on-time, and high-quality product spirit. I'm a self and quick learner, self-motivated and confident.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
        A detailed-oriented, responsible, and committed Engineer with a get-it-done, on-time, and high-quality product spirit. I'm a self and quick learner, self-motivated and confident.
        </p>
        <p className="text-lg text-darkDesert mb-4 text-center px-8">
        A detailed-oriented, responsible, and committed Engineer with a get-it-done, on-time, and high-quality product spirit. I'm a self and quick learner, self-motivated and confident.{" "}
        </p>

        <p className="text-lg text-darkDesert mb-4 text-center px-8">
          Let's collab!
        </p>
        <div className="flex justify-center items-center pb-8">
          <Anchor href={GITHUB_URL}>
            <FaGithub size={32} />
          </Anchor>
          <Anchor href={LINKEDIN_URL}>
            <FaLinkedin size={32} />
          </Anchor>
          <Anchor href={RESUME_URL}>
            <FaFileAlt size={32} />
          </Anchor>
        </div>
        <div>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default memo(About);
