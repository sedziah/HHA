import Property1Default from "./Property1Default";
import "./DreamsFrame.css";

const DreamsFrame = () => {
  return (
    <section className="frame3">
      <div className="frame4">
        <img className="hero-image-icon" alt="" src="/hero-image@2x.png" />
        <b className="building-dreams-engineering-container">
          <span>{`Building Dreams, `}</span>
          <span className="engineering-excellence">
            Engineering Excellence.
          </span>
        </b>
        <div className="beyond-brick-and">
          Beyond brick and mortar, we are builders of a better future. By
          combining artistry with functionality, we enhance the way people live,
          work, and play.
        </div>
        <Property1Default
          getStarted="Get started"
          property1DefaultBoxSizing="border-box"
          property1DefaultCursor="pointer"
          property1DefaultBorder="none"
          property1DefaultPosition="absolute"
          property1DefaultTop="320px"
          property1DefaultLeft="0px"
          getStartedDisplay="inline-block"
          getStartedLetterSpacing="unset"
        />
        <div className="group-parent">
          <img className="frame-item" alt="" src="/group-2.svg" />
          <img className="frame-inner" alt="" src="/group-3.svg" />
          <img className="group-icon" alt="" src="/group-5.svg" />
          <img className="frame-child1" alt="" src="/group-4.svg" />
        </div>
      </div>
    </section>
  );
};

export default DreamsFrame;
