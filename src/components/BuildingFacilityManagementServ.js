import BuildingFacilityManagementServ1 from "./BuildingFacilityManagementServ1";
import "./BuildingFacilityManagementServ.css";

const BuildingFacilityManagementServ = () => {
  return (
    <section className="frame-group">
      <BuildingFacilityManagementServ1
        imageDimensions="/rectangle-10@2x.png"
        serviceDescription="Building Facility Management Services"
      />
      <BuildingFacilityManagementServ1
        imageDimensions="/rectangle-101@2x.png"
        serviceDescription="Real Estate Development Services"
        propWidth="319px"
      />
      <div className="rectangle-group">
        <img className="frame-child2" alt="" src="/rectangle-102@2x.png" />
        <div className="frame5">
          <div className="architectural-engineering">{`Architectural & Engineering Services`}</div>
          <div className="enim-tincidunt-donec1">
            Enim tincidunt donec eget fringilla urna tortor vitae. Morbi id
            aliquam integer posuere quisque ut quis.
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingFacilityManagementServ;
