import Navigation from "../navigation/Navigation";
import Form from "../form";
import { useRef } from "react";

const MobilePages = ({ myProp }) => {
  let textArr = myProp.text;
  let contactArr = myProp.contactButtons;
  let contactFormRef = useRef();
  return (
    <>
      {" "}
      <div
        className="mobile-Subpage-con"
        onLoad={() => {
          document.body.style.background = myProp.backgroundCol;

          document.querySelector(".return").style.visibility = "visible";
        }}
      >
        <Navigation />
        <div className="imgCon">
          <img src={myProp.mobileImg} alt="pageimage"></img>
        </div>

        <div className="container">
          <div className="text-con">
            <h1>
              {myProp.header}{" "}
              <span style={{ color: myProp.second }}>{myProp.secondText}</span>
              ...
            </h1>

            {textArr.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>

          <div className={myProp.component}>
            <div className="contactImg">
              {contactArr.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    contactFormRef.current.style.display = "block";
                  }}
                >
                  <img src={item.img} alt="avatar img"></img>
                  <p>{item.mail}</p>
                </div>
              ))}
            </div>

            <div className="contactForm" ref={contactFormRef}>
              <Form />
            </div>
          </div>

          <div className="pageLogo">
            <img src={myProp.logo} alt="page logo"></img>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobilePages;
