/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const RoundImg = styled.img`
  border-radius: 50%;
`;
const apps = ["french-fries.png", "venmo.png", "cashapp.png", "wechat.png"];

export function PaymentWidget() {
  const [showAll, setShowAll] = useState(true);
  const [targetPaymentIndex, setTargetPaymentIndex] = useState(1);
  return (
    <div
      css={css`
        display: inherit;
        position: fixed;
        left: 20px;
        bottom: 20px;
        border-radius: 100%;
        will-change: transform;
        z-index: 99;
        transition: width 0.5s ease-in-out;
      `}
      onMouseLeave={() => {
        console.log("mouse leave");
        setShowAll(false);
      }}
      onMouseEnter={(e) => {
        setShowAll(true);
      }}
    >
      {apps.map((app, i) => {
        return (
          <div
            key={i}
            css={css`
              position: relative;
              padding: 5px;
            `}
          >
            <RoundImg
              css={css`
                cursor: pointer;
                z-index: ${i === 0 ? 99 : 2};
                opacity: ${i === 0 ? 1 : showAll ? 1 : 0};
                will-change: transform;
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
            {i > 0 && (
              <img
                onMouseEnter={(event: any) => {
                  setTargetPaymentIndex(i);
                }}
                onMouseLeave={() => {
                  setTargetPaymentIndex(-1);
                }}
                css={css`
                  visibility: ${targetPaymentIndex === i
                    ? "visible"
                    : "hidden"};
                  position: absolute;
                  left: -20px;
                  bottom: 65px;
                  opacity: ${targetPaymentIndex === i && showAll ? 1 : 0};
                  will-change: transform;
                  transition: all 0.3s ease-in-out;
                `}
                width={100}
                height={100}
                src={`/images/${app.split(".")[0]}_qrcode.jpg`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
