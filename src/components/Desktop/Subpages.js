import { useState } from "react";
import gsap from "gsap";
import Modal from "../Desktop/Modal";

const DeskPages = ({ myProp, disap }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openModal = (e) => {
    setOpen(true);
    setIndex(e.currentTarget.dataset.index);

    const timer = setTimeout(() => {
      gsap.from(".modal", {
        duration: 1,
        top: -500,
        ease: "easeIn",
      });
    }, 0);
  };

  const closeModal = () => {
    setOpen(false);
  };

  let textArr = myProp.text;
  let contactArr = myProp.contactButtons;

  return (
    <>
      <div
        className="Subpage-con"
        onLoad={() => {
          document.body.style.background = myProp.backgroundCol;
          document.querySelector(".return").style.visibility = "visible";
          document.querySelector(".logo-con").style.visibility = "hidden";
        }}
      >
        <div>
          <img src={myProp.img} alt="pageimage"></img>
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
            {contactArr.map((item, index) => (
              <div key={index} data-index={index} onClick={openModal}>
                <img src={item.img} alt="avatar img"></img>
                <p>{item.mail}</p>
              </div>
            ))}
          </div>
          <div className="button">{myProp.button}</div>
        </div>
      </div>
      <Modal moreTxt={myProp.pop} isOpen={open} onClose={closeModal} />
    </>
  );
};
export default DeskPages;
