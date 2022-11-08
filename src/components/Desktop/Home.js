const Home = () => {
  return (
    <>
      <div
        className="desk-homepage"
        onLoad={() => {
          document.querySelector(".return").style.visibility = "hidden";
        }}
      >
        <div className="img-con">
          <div>
            <img
              src="../assets/front-desktop/front-what-we-do.png"
              alt="menuimg"
            />
          </div>
          <div>
            <img
              src="../assets/front-desktop/front-maintainable.png"
              alt="menuimg"
            />
          </div>
          <div>
            <img
              src="../assets/front-desktop/front-get-in-touch.png"
              alt="menuimg"
            />

            <p className="button">And yet... more to come</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
