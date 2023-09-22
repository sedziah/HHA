import { useMemo } from "react";
import "./Property1Default.css";

const Property1Default = ({
  getStarted,
  property1DefaultBoxSizing,
  property1DefaultCursor,
  property1DefaultBorder,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  getStartedDisplay,
  getStartedLetterSpacing,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      boxSizing: property1DefaultBoxSizing,
      cursor: property1DefaultCursor,
      border: property1DefaultBorder,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultBoxSizing,
    property1DefaultCursor,
    property1DefaultBorder,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const getStartedStyle = useMemo(() => {
    return {
      display: getStartedDisplay,
      letterSpacing: getStartedLetterSpacing,
    };
  }, [getStartedDisplay, getStartedLetterSpacing]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <div className="get-started" style={getStartedStyle}>
        {getStarted}
      </div>
    </div>
  );
};

export default Property1Default;
