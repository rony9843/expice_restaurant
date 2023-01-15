import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function LandingPage() {
  return (
    <LandingPageStyleBack>
      <div className="main_div pb-5">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="leftSide">
                <LeftSide></LeftSide>
              </div>
            </div>
            <div className=" rightSide col-sm-12 col-md-5 col-lg-5">
              <div className="">
                <RightSide></RightSide>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LandingPageStyleBack>
  );
}

const LandingPageStyleBack = styled.div`
  .main_div {
    background: linear-gradient(
      to right,
      #fff5ec 0%,
      #fff5ec 70%,
      #35cd8c 30%,
      #35cd8c 100%
    );
  }

  .rightSide {
    display: flex;
    align-items: center;
  }
`;
