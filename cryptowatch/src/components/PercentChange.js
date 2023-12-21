import React, { useEffect, useState } from "react";
import colors from "../style/_settings.scss";

const PercentChange = ({ percent }) => {
  const [color, setColors] = useState();
  useEffect(() => {
    if (percent) {
      if (percent >= 0) {
        setColors(colors.green1);
      } else {
        setColors(colors.red1);
      }
    } else {
      setColors(colors.white1);
    }
  }, [percent]);

  return (
    <p className="percent-change-container" style={{ color }}>
      {percent ? percent.toFixed(1) + "%" : "-"}
    </p>
  );
};

export default PercentChange;
