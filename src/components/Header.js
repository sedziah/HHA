import { useCallback } from "react";
import Property1Default1 from "./Property1Default1";
import "./Header.css";

const Header = () => {
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
    <header className="header">
      <button className="logo">
        <b className="hha">HHA</b>
      </button>
      <nav className="services-parent" id="Services">
        <Property1Default1
          services="services"
          property1DefaultCursor="pointer"
          property1DefaultBorder="none"
          property1DefaultPadding="0"
          property1DefaultBackgroundColor="transparent"
          property1DefaultPosition="relative"
          property1DefaultWidth="69px"
          servicesDisplay="inline-block"
          servicesCursor="unset"
          onServicesClick={onServicesClick}
        />
        <Property1Default1
          services="portfolio"
          property1DefaultCursor="pointer"
          property1DefaultBorder="unset"
          property1DefaultPadding="unset"
          property1DefaultBackgroundColor="unset"
          property1DefaultPosition="relative"
          property1DefaultWidth="69px"
          servicesDisplay="inline-block"
          servicesCursor="pointer"
          onServicesClick={onPortfolioContainerClick}
          onPortfolioTextClick={onPortfolioTextClick}
        />
        <Property1Default1
          services="about"
          property1DefaultCursor="pointer"
          property1DefaultBorder="none"
          property1DefaultPadding="0"
          property1DefaultBackgroundColor="transparent"
          property1DefaultPosition="relative"
          property1DefaultWidth="54px"
          servicesDisplay="inline-block"
          servicesCursor="unset"
          onServicesClick={onAboutClick}
        />
        <Property1Default1
          services="contact"
          property1DefaultCursor="pointer"
          property1DefaultBorder="none"
          property1DefaultPadding="0"
          property1DefaultBackgroundColor="transparent"
          property1DefaultPosition="relative"
          property1DefaultWidth="69px"
          servicesDisplay="inline-block"
          servicesCursor="unset"
          onServicesClick={onContactClick}
        />
      </nav>
    </header>
  );
};

export default Header;
