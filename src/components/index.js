import { useEffect, useState } from "react";
import Desktopview from "./Desktop/Desktopview";
import MobileView from "./Mobile/Mobileview";

//sætter height og wigth til viduets
const windowDim = () => ({
  height: window.innerHeight,
  width: window.innerWidth,
});

const Index = () => {
  const [dimensions, setDimensions] = useState(windowDim());

  //useState sætter værdien af 'dimension' og når vi nedenunder kalder setDimension opdateres værdien af dimension til en ny værdi.

  useEffect(() => {
    const handleResize = () => {
      setDimensions(windowDim());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); //useEffect

  //breakpoint for hvornår vi skal skifte mellem mobile eller desktop
  const breakpoint = 769;
  //forkortet if statment
  return dimensions.width < breakpoint ? <MobileView /> : <Desktopview />;
};

export default Index;
