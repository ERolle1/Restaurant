import React from "react";
import spoon from "../../assets/spoon.svg";
export const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={spoon} alt="" className="spoon__img" />
    </div>
  );
};
