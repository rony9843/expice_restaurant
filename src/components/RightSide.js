import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

export default function RightSide() {
  return (
    <RightSideBack>
      <div className="div_main">
        <div className="caro_div">
          <Carousel showStatus={false} showThumbs={false} showArrows={true}>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
            <div>
              <img src="https://i.ibb.co/tCPhHw8/Pngtree-delicious-food-568171-2.png" />
            </div>
          </Carousel>
        </div>
      </div>
    </RightSideBack>
  );
}

const RightSideBack = styled.div`
  .caro_div {
    display: flex;
    justify-content: right;
  }

  .div_main {
    text-align: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
