import { useMemo } from "react";
import "./Property1Default1.css";

const Property1Default1 = ({
  services,
  property1DefaultCursor,
  property1DefaultBorder,
  property1DefaultPadding,
  property1DefaultBackgroundColor,
  property1DefaultPosition,
  property1DefaultWidth,
  servicesDisplay,
  servicesCursor,
  onServicesClick,
  onPortfolioTextClick,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      cursor: property1DefaultCursor,
      border: property1DefaultBorder,
      padding: property1DefaultPadding,
      backgroundColor: property1DefaultBackgroundColor,
      position: property1DefaultPosition,
      width: property1DefaultWidth,
    };
  }, [
    property1DefaultCursor,
    property1DefaultBorder,
    property1DefaultPadding,
    property1DefaultBackgroundColor,
    property1DefaultPosition,
    property1DefaultWidth,
  ]);

  const servicesStyle = useMemo(() => {
    return {
      display: servicesDisplay,
      cursor: servicesCursor,
    };
  }, [servicesDisplay, servicesCursor]);

  return (
    <div
      className="property-1default1"
      style={property1Default1Style}
      onClick={onServicesClick}
    >
      <div
        className="services1"
        style={servicesStyle}
        onClick={onPortfolioTextClick}
      >
        {services}
      </div>
    </div>
  );
};

export default Property1Default1;
