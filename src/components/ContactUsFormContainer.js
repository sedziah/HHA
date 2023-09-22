import Property1Default from "./Property1Default";
import "./ContactUsFormContainer.css";

const ContactUsFormContainer = () => {
  return (
    <div className="contact-us-parent">
      <b className="contact-us">Contact Us</b>
      <b className="lets-get-started">Let’s get started with your project</b>
      <div className="together-lets-shape">{`Together, let's shape a world where architectural marvels meet human ingenuity. `}</div>
      <div className="frame-div">
        <div className="gridiconslocation-parent">
          <img
            className="gridiconslocation"
            alt=""
            src="/gridiconslocation.svg"
          />
          <div className="adenta-accra-">Adenta, Accra - Ghana</div>
        </div>
        <div className="icbaseline-phone-parent">
          <img
            className="gridiconslocation"
            alt=""
            src="/icbaselinephone.svg"
          />
          <div className="div">+233 54-0341085 / 54-8387377</div>
        </div>
        <div className="gridiconslocation-parent">
          <img
            className="gridiconslocation"
            alt=""
            src="/iconamoonemailthin.svg"
          />
          <div className="hhaconsultghgmailcom">hhaconsultgh@gmail.com</div>
        </div>
      </div>
      <div className="contact-form">
        <div className="name-input">
          <div className="name">Name</div>
        </div>
        <div className="name-input">
          <div className="name">Email</div>
        </div>
        <div className="message-input">
          <div className="type-message-here">Type message here</div>
        </div>
        <Property1Default
          getStarted="Submit"
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
    </div>
  );
};

export default ContactUsFormContainer;
