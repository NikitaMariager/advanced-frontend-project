import Navigation from "../navigation/Navigation";
import { useRef } from "react";
import DeskPages from "./Subpages.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import content from "../content.json";
import Home from ".//Home";

const Desktopview = () => {
  const myText = content;

  const deskRef = useRef();

  const logoRef = useRef();

  function disap() {
    logoRef.current.style.visibility = "hidden";
  }
  function show() {
    logoRef.current.style.visibility = "visible";
  }

  return (
    <>
      <Router>
        <main>
          <div className="topnav">
            <Navigation disap={disap} show={show} />
            <div className="logo-con" ref={logoRef}>
              <img src="../assets/logo/logo-final.png" alt="logo" />
            </div>
          </div>
          <div ref={deskRef}>
            <section>
              <Routes>
                <Route path="/" element={<Home />}></Route>

                <Route
                  path="/WhatWeDo"
                  element={
                    <DeskPages myProp={myText.myContent[0]} disap={disap} />
                  }
                />
                <Route
                  path="/MaintainAble"
                  element={<DeskPages myProp={myText.myContent[1]} />}
                />
                <Route
                  path="/GetInTouch"
                  element={<DeskPages myProp={myText.myContent[2]} />}
                />
              </Routes>
            </section>
          </div>
        </main>
      </Router>
    </>
  );
};
export default Desktopview;
