/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const RoundImg = styled.img`
  border-radius: 50%;
  /* margin: 2px; */
  position: absolute;
  left: 0;
  top: 0;
`;

export function PaymentWidget() {
  const [showAll, setShowAll] = useState(false);
  const [targetPaymentIndex, setTargetPaymentIndex] = useState(-1);
  return (
    <div
      css={css`
        display: flex;
        position: fixed;
        left: 20px;
        bottom: 70px;
        /* border-radius: 30%;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px; */
        z-index: 99;
        cursor: pointer;
        /* height: 40px; */
        /* max-width: 200px; */
        width: ${showAll ? "160px" : "50px"};
        /* padding: 5px; */
        transition: width 0.5s ease-in-out;
      `}
      onMouseLeave={() => {
        setShowAll(false);
      }}
      onMouseEnter={(e) => {
        // console.log("mouse enter", e.clientX, e.clientY);
        setShowAll(true);
      }}
    >
      <RoundImg
        css={css`
          z-index: 99;
        `}
        onMouseEnter={(event: any) => {
          setTargetPaymentIndex(0);
        }}
        onMouseLeave={() => {
          setTargetPaymentIndex(-1);
        }}
        src="/images/venmo.png"
        width={50}
        height={50}
      />
      {targetPaymentIndex !== -1 && (
        <img
          css={css`
            position: absolute;
            bottom: 0px;
            left: -20px;
            opacity: ${targetPaymentIndex === 0 && showAll ? 1 : 0};
            transition: all 0.2s ease-in;
          `}
          width={100}
          height={100}
          src="/images/venmo.jpg"
        />
      )}
      <RoundImg
        onMouseEnter={(event: any) => {
          setTargetPaymentIndex(1);
        }}
        onMouseLeave={() => {
          setTargetPaymentIndex(-1);
        }}
        css={css`
          opacity: ${showAll ? 1 : 0};
          transform: ${showAll ? "translateX(60px)" : 0};
          transition: all 0.5s ease-in-out;
        `}
        src="/images/cashapp.png"
        width={50}
        height={50}
      />{" "}
      {targetPaymentIndex !== -1 && (
        <img
          width={100}
          height={100}
          css={css`
            position: absolute;
            bottom: 0px;
            left: 30px;
            opacity: ${targetPaymentIndex === 1 && showAll ? 1 : 0};
            transition: all 0.2s ease-in;
          `}
          src="/images/venmo.jpg"
        />
      )}
      <RoundImg
        onMouseEnter={(event: any) => {
          setTargetPaymentIndex(2);
        }}
        onMouseLeave={() => {
          setTargetPaymentIndex(-1);
        }}
        css={css`
          opacity: ${showAll ? 1 : 0};
          transform: ${showAll ? "translateX(120px)" : 0};
          transition: all 0.5s ease-in-out;
        `}
        src="/images/venmo.png"
        width={50}
        height={50}
      />
      {targetPaymentIndex !== -1 && (
        <img
          width={100}
          height={100}
          css={css`
            position: absolute;
            bottom: 0px;
            left: 90px;
            opacity: ${targetPaymentIndex === 2 && showAll ? 1 : 0};
            transition: all 0.2s ease-in;
          `}
          src="/images/venmo.jpg"
        />
      )}
    </div>
  );
}
