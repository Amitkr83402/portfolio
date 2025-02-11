import { useTrail, animated } from "react-spring";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiVite,
  SiMysql,
  SiJenkins,
  SiEclipseide,
  SiAzuredevops,
  SiGit,
  SiApache,
} from "react-icons/si";
import { DiGithubBadge } from "react-icons/di";
import { GrTest } from "react-icons/gr";
import { TbBrandCucumber } from "react-icons/tb";
import { BsMicrosoft } from "react-icons/bs";
import { RiFileWord2Fill } from "react-icons/ri";

const skills = [
  { id: "HTML", Component: FaHtml5 },
  { id: "CSS", Component: FaCss3Alt },
  { id: "JavaScript", Component: SiJavascript },
  { id: "Bootstrap", Component: FaBootstrap },
  { id: "TypeScript", Component: SiTypescript },
  { id: "React", Component: FaReact },
  { id: "Tailwind CSS", Component: SiTailwindcss },
  { id: "Node.js", Component: FaNodeJs },
  { id: "MySQL", Component: SiMysql },
  { id: "Vite", Component: SiVite },
  { id: "VS Code", Component: SiVisualstudiocode },
  { id: "GitHub", Component: DiGithubBadge },
  { id: "Java", Component: FaJava },
  { id: "Selenium WebDriver", Component: GrTest },
  { id: "Cucumber", Component: TbBrandCucumber },
  { id: "TestNG", Component: GrTest },
  { id: "Jenkins", Component: SiJenkins },
  { id: "Eclipse IDE", Component: SiEclipseide },
  { id: "Visual Studio", Component: SiVisualstudiocode },
  { id: "Microsoft Office", Component: BsMicrosoft },
  { id: "Microsoft Word", Component: RiFileWord2Fill },
  { id: "Zephyr Scale", Component: SiAzuredevops },
  { id: "JIRA", Component: SiAzuredevops },
  { id: "Azure DevOps", Component: SiAzuredevops },
  { id: "JMeter", Component: SiApache },
  { id: "GIT", Component: SiGit },
  { id: "Hybrid Automation Framework", Component: GrTest },
  { id: "BDD (Behavior-Driven Development)", Component: TbBrandCucumber },
  { id: "Scrum", Component: BsMicrosoft },
  { id: "Kanban", Component: BsMicrosoft },
  { id: "Test Case Management", Component: SiAzuredevops },
  { id: "Defect Reporting & Tracking", Component: SiAzuredevops },
  { id: "Apache POI", Component: SiApache },
  { id: "Log4j", Component: SiApache },
];

export default function Skills() {
  const trail = useTrail(skills.length, {
    from: { transform: "translate3d(0,-40px,0)", opacity: 0 },
    to: { transform: "translate3d(0,0px,0)", opacity: 1 },
  });

  return (
    <div
      id="skills"
      className="bg-lightDesert rounded-lg flex items-center justify-center h-auto p-10"
    >
      <div className="text-center max-w-2xl w-full mx-auto">
        <h2 className="text-4xl font-bold text-darkDesert mb-6">Skills</h2>
        <div className="grid grid-cols-4 gap-4 my-4 justify-items-center">
          {trail.map((props, index) => {
            const { id, Component } = skills[index];
            return (
              <animated.div
                style={props}
                className="relative group text-5xl text-goldDesert transition-all duration-50 transform hover:scale-110 hover:text-darkDesert"
                key={id}
              >
                <Component title={id} />
                <span className="absolute bottom-[-1.5rem] left-1/2 transform -translate-x-1/2 opacity-0 text-xs font-medium bg-darkDesert text-white rounded px-2 py-1 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all">
                  {id}
                </span>
              </animated.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
