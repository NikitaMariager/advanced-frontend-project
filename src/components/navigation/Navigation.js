import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ disap, show }) => {
  const homeRef = useRef();

  function hidden() {
    homeRef.current.style.visibility = "hidden";
  }

  return (
    <nav>
      <ul>
        <li
          className="return"
          onClick={() => {
            hidden();
            document.body.style.background =
              "linear-gradient(#ffffff, #b1d2e8)";
            disap();
            show();
          }}
          ref={homeRef}
        >
          <Link to="/">
            <img src="../assets/navigation/back.png" alt="arrow back" />
          </Link>
        </li>

        <div>
          <li>
            <NavLink to="/WhatWeDo"></NavLink>
          </li>

          <li>
            <NavLink to="/MaintainAble"></NavLink>
          </li>
          <li>
            <NavLink to="/GetInTouch"></NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};
export default Navigation;
