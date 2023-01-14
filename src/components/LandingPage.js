import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function LandingPage() {
  return (
    <div>
      <div className="leftSide">
        <LeftSide></LeftSide>
      </div>
      <div className="rightSide">
        <RightSide></RightSide>
      </div>
    </div>
  );
}
