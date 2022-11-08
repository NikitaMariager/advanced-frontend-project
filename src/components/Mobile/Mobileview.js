import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobilePages from "./mobilepages";
import content from "../content.json";
import HomeMobile from "./HomeMobile";

const MobileView = () => {
  document.body.style.height = "100%";

  const myText = content;

  return (
    <>
      <Router>
        <main className="mobile">
          <section>
            <Routes>
              <Route path="/" element={<HomeMobile />}></Route>

              <Route
                path="/WhatWeDo"
                element={<MobilePages myProp={myText.myContent[0]} />}
              />
              <Route
                path="/MaintainAble"
                element={<MobilePages myProp={myText.myContent[1]} />}
              />
              <Route
                path="/GetInTouch"
                element={<MobilePages myProp={myText.myContent[2]} />}
              />
            </Routes>
          </section>
        </main>
      </Router>
    </>
  );
};

export default MobileView;
