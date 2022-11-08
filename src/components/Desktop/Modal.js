import ReactDOM from "react-dom";
import React from "react";
import Form from "../form";

const Modal = ({ moreTxt, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="blurModal" onClick={onClose}></div>
      <div className="modal">
        <div className="close-container">
          <div onClick={onClose}>
            <a href="#">
              <span className="left">
                <span className="circle-left"></span>
                <span className="circle-right"></span>
              </span>
              <span className="right">
                <span className="circle-left"></span>
                <span className="circle-right"></span>
              </span>
            </a>
          </div>
          <Form />
        </div>
      </div>
    </>,
    document.body
  );
};
export default Modal;
