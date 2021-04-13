/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const RoundImg = styled.img`
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 0;
`;
const apps = ["venmo.png", "cashapp.png", "wechat.png"];

export function PaymentWidget() {
  const [showAll, setShowAll] = useState(false);
  const [targetPaymentIndex, setTargetPaymentIndex] = useState(-1);
  return (
    <div
      css={css`
        display: inline-block;
        position: fixed;
        left: 20px;
        bottom: 20px;
        border-radius: 100%;

        /* background: transparent; */
        z-index: 99;
        cursor: pointer;
        height: 50px;
        width: ${showAll ? "160px" : "50px"};
        transition: width 0.5s ease-in-out;
      `}
      onMouseLeave={() => {
        setShowAll(false);
      }}
      onMouseEnter={(e) => {
        setShowAll(true);
      }}
    >
      {apps.map((app, i) => {
        return (
          <div key={i}>
            <RoundImg
              css={css`
                z-index: ${i === 0 ? 99 : 2};
                opacity: ${i === 0 ? 1 : showAll ? 1 : 0};
                transform: ${showAll ? `translateX(${60 * i}px)` : 0};
                transition: all 0.5s ease-in-out;
                box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
              `}
              onMouseEnter={(event: any) => {
                setTargetPaymentIndex(i);
              }}
              onMouseLeave={() => {
                setTargetPaymentIndex(-1);
              }}
              src={`/images/${app}`}
              width={50}
              height={50}
            />
            <img
              onMouseEnter={(event: any) => {
                setTargetPaymentIndex(i);
              }}
              onMouseLeave={() => {
                setTargetPaymentIndex(-1);
              }}
              css={css`
                visibility: ${targetPaymentIndex === i ? "visible" : "hidden"};
                position: absolute;
                bottom: 50px;
                left: ${-20 + i * 56}px;
                opacity: ${targetPaymentIndex === i && showAll ? 1 : 0};
                transition: all 0.3s ease-in-out;
              `}
              width={100}
              height={100}
              src={`/images/${app.split(".")[0]}_qrcode.jpg`}
            />
          </div>
        );
      })}
    </div>
  );
}
