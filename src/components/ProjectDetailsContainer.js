import Property1Default from "./Property1Default";
import "./ProjectDetailsContainer.css";

const ProjectDetailsContainer = () => {
  return (
    <div className="frame-container">
      <div className="button-wrapper">
        <Property1Default
          getStarted="View Project Details"
          property1DefaultBoxSizing="border-box"
          property1DefaultCursor="pointer"
          property1DefaultBorder="none"
          property1DefaultPosition="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          getStartedDisplay="inline-block"
          getStartedLetterSpacing="unset"
        />
      </div>
      <div className="button-container">
        <Property1Default
          getStarted="View Project Details"
          property1DefaultBoxSizing="border-box"
          property1DefaultCursor="pointer"
          property1DefaultBorder="none"
          property1DefaultPosition="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          getStartedDisplay="inline-block"
          getStartedLetterSpacing="unset"
        />
      </div>
      <div className="button-frame">
        <Property1Default
          getStarted="View Project Details"
          property1DefaultBoxSizing="border-box"
          property1DefaultCursor="pointer"
          property1DefaultBorder="none"
          property1DefaultPosition="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          getStartedDisplay="inline-block"
          getStartedLetterSpacing="0.02em"
        />
      </div>
    </div>
  );
};

export default ProjectDetailsContainer;
