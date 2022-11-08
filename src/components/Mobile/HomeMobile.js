import { Link } from "react-router-dom";

const HomeMobile = () => {
  return (
    <div className="mobileHome">
      <div>
        <div className="logo-con">
          <img src="../assets/logo/logo-final.png" alt="logo" />
        </div>

        <div className="menuImg">
          <Link to="/WhatWeDo" className="menuImg">
            <img
              src="../../assets/front-mobil/weba-2-mobil-whatwedo.png"
              alt="mobil menu img"
            />
          </Link>
        </div>

        <div className="menuImg">
          <Link to="/MaintainAble" className="menuImg">
            <img
              src="../../assets/front-mobil/weba-3-mobil-maintainable.png"
              alt="mobil menu img"
            ></img>
          </Link>
        </div>

        <div className="menuImg">
          <Link to="/GetInTouch" className="menuImg">
            <img
              src="../../assets/front-mobil/weba-mobil.getintouch.png"
              alt="mobil menu img"
            ></img>
          </Link>
        </div>

        <div className="button">And yet... more to come</div>
      </div>
    </div>
  );
};
export default HomeMobile;
