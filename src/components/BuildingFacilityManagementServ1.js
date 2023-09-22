import { useMemo } from "react";
import "./BuildingFacilityManagementServ1.css";

const BuildingFacilityManagementServ1 = ({
  imageDimensions,
  serviceDescription,
  propWidth,
}) => {
  const buildingFacilityManagementStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="rectangle-parent">
      <img className="rectangle-icon" alt="" src={imageDimensions} />
      <div
        className="building-facility-management"
        style={buildingFacilityManagementStyle}
      >
        {serviceDescription}
      </div>
      <div className="enim-tincidunt-donec">
        Enim tincidunt donec eget fringilla urna tortor vitae. Morbi id aliquam
        integer posuere quisque ut quis.
      </div>
    </div>
  );
};

export default BuildingFacilityManagementServ1;
