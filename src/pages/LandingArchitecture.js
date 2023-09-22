import { useCallback } from "react";
import Header from "../components/Header";
import DreamsFrame from "../components/DreamsFrame";
import TrustedBySection from "../components/TrustedBySection";
import BuildingFacilityManagementServ from "../components/BuildingFacilityManagementServ";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import Property1Default from "../components/Property1Default";
import ContactUsFormContainer from "../components/ContactUsFormContainer";
import "./LandingArchitecture.css";

const LandingArchitecture = () => {
  const onServicesClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPortfolioContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPortfolioTextClick = useCallback(() => {
    // Please sync "HNK - Portfolio" to the project
  }, []);

  const onAboutClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='frameSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className="landing-architecture">
      <Header />
      <DreamsFrame />
      <TrustedBySection />
      <div className="frame" data-scroll-to="frameContainer1">
        <b className="services">Services</b>
      </div>
      <BuildingFacilityManagementServ />
      <b className="portfolio">Portfolio</b>
      <ProjectDetailsCard />
      <button className="frame1">
        <Property1Default
          getStarted="View More Projects"
          property1DefaultBoxSizing="border-box"
          property1DefaultCursor="unset"
          property1DefaultBorder="unset"
          property1DefaultPosition="unset"
          property1DefaultTop="unset"
          property1DefaultLeft="unset"
          getStartedDisplay="inline-block"
          getStartedLetterSpacing="unset"
        />
      </button>
      <section className="frame-parent" data-scroll-to="frameSection">
        <div className="frame2">
          <div className="about-us">About Us</div>
          <div className="at-hha-consult-container">
            <p className="at-hha-consult">
              At HHA Consult, your vision takes center stage. We listen, we
              collaborate, and we bring your ideas to life with unparalleled
              dedication. Whether it's a sprawling complex or an intimate
              masterpiece, we ensure that every detail reflects your aspirations
              and resonates with your values.
            </p>
            <p className="at-hha-consult">
              Join us on a journey of innovation, craftsmanship, and
              transformative engineering. Welcome to HHA Consult - Where
              Innovation Meets Infrastructure!
            </p>
          </div>
        </div>
        <img className="frame-child" alt="" src="/rectangle-9@2x.png" />
      </section>
      <ContactUsFormContainer />
      <div className="footer">
        <div className="footer-child" />
        <div className="hnk-construction-all-container">
          <span>{`©2023 HNK Construction. All Right Reserved. Powered by || `}</span>
          <span className="creya360">Creya360</span>
        </div>
      </div>
    </div>
  );
};

export default LandingArchitecture;
