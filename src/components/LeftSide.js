import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

export default function LeftSide() {
  return (
    <LeftSideStyle>
      <div>
        <div className="">
          <div className="logo">
            <span>exprice</span>
          </div>
          <div className="title">
            <span>Food</span>
          </div>
          <div>
            <div className="des des-one">
              <span>Discover Restaurant</span>
            </div>
            <div className="des">
              <span>& Delicious Food</span>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8">
              <div className="search_box">
                <div class="input-group ">
                  <input
                    type="text"
                    class="form-control search_input"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    class="btn btn-outline-secondary search_btn"
                    type="button"
                    id="button-addon2"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="location">
            <div>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>Saudi Arabia</div>
          </div>
        </div>
      </div>
    </LeftSideStyle>
  );
}

const LeftSideStyle = styled.div`
  .logo {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 90px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #35cd8c;
  }
  .title {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 900;
    font-size: 150px;
    line-height: 225px;
    display: flex;
    align-items: center;
    text-align: center;
    text-transform: capitalize;

    color: #2e266f;

    opacity: 0.05;
  }
  .des {
    top: -20px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 70px;
    /* or 117% */

    display: flex;
    align-items: center;
    text-transform: capitalize;

    color: #2e266f;
  }
  .des-one {
    margin-top: -50px;
  }
  .search_box {
    margin-top: 20px;

    width: 100%;
    background-color: white;
    border: 10px solid white;
  }
  .search_input {
    padding: 10px;
    border: none;
    border-radius: 0px 0px 0px 0px;
    height: 72px;
    padding-left: 20px;
  }
  .search_btn {
    padding: 10px;
    border: none;
    padding-left: 45px;
    padding-right: 45px;
    height: 72px;
    border-radius: 50px 0px 0px 0px !important;

    background: #35cd8c;
    border-radius: 60px 0px 0px 0px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 90px;
    /* or 300% */

    display: flex;
    align-items: center;
    text-transform: uppercase;
    justify-content: center;

    color: #ffffff;
  }
  .location {
    margin-top: 80px;
    width: 280px;
    height: 65px;

    background: #35cd8c;
    border-radius: 0px 100px 100px 0px;
    display: flex;
    align-items: center;

    justify-content: center;
  }
  .location div {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 90px;
    /* or 300% */

    display: flex;
    align-items: center;
    text-transform: capitalize;

    color: #ffffff;
  }
  .location > div {
    padding: 0px 10px;
  }

  @media screen and (max-width: 767px) {
    .title {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 900;
      font-size: 100px;
      line-height: 150px;
      display: flex;
      align-items: center;
      text-align: center;
      text-transform: capitalize;
    }
    .des {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      /* or 133% */

      display: flex;
      align-items: center;
      text-transform: capitalize;
    }
    .des-one {
      margin-top: 00px;
    }
    .location {
      margin-top: 40px;
      width: 180px;
      display: flex;
      justify-content: flex-start;
      padding: 0px 5px;
    }
    .location div {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 90px;
    }
    .location > div {
      padding: 0px 5px;
    }
  }
`;
