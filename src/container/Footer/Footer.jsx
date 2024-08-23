import React, { useState } from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { IoDocumentTextOutline } from "react-icons/io5";
import { BsSend } from "react-icons/bs";
import "./Footer.scss";

export const Footer = () => {
  const onButtonClick = () => {
    const pdfUrl = "https://teal-georgina-89.tiiny.site/";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Anand Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee <span>&</span> chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:anandsingh14442@gmail.com" className="p-text">
            anandsingh14442@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 8424861660" className="p-text">
            8424861660
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          className="app__footer-form app__flex"
          action="https://formsubmit.co/your@email.com"
          method="POST"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your E-mail"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="submit" className="p-text">
            {loading ? (
              <>
                Sending <BsSend />
              </>
            ) : (
              <>Send Message</>
            )}
          </button>
          <button type="button" className="p-text" onClick={onButtonClick}>
            Take a Look at Resume <IoDocumentTextOutline />
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank for getting in touch</h3>
        </div>
      )}
      <div>
        <h1 className="head-text" style={{ fontSize: '1rem', textDecoration: 'underline' }}>
          <span>Visit </span>Again
        </h1>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
