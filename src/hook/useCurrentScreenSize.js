import React, { useState, useEffect } from "react";

const useCurrentScreenSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const getCurrentWidth = () => {
    setSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", getCurrentWidth);

    return () => {
      window.removeEventListener("resize", getCurrentWidth);
    };
  }, [size]);

  return size;
};

export default useCurrentScreenSize;
