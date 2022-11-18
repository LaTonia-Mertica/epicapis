import React, { useState, useEffect } from "react";

const useMinWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    window.addEventListener("orientationchange", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize");
      window.removeEventListener("orientationchange");
    };
  }, []);

  return width;
};

export default useMinWidth;
