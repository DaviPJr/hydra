import React, { useState, useEffect } from "react";
import Circles from "../Circles/Circles";
import CirclesMobile from "../CirclesMobile/CirclesMobile";
import circlesData from "../../data";

export const ResponsiveCircles = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? (
    <CirclesMobile circlesData={circlesData} />
  ) : (
    <div className="circles-container">
      {circlesData.map((circle) => (
        <Circles
          key={circle.id}
          title={circle.title}
          firstTitle={circle.firstTitle}
          secondTitle={circle.secondTitle}
        />
      ))}
    </div>
  );
};

export default ResponsiveCircles;
