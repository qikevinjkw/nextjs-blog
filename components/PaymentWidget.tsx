/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const RoundImg = styled.img`
  border-radius: 50%;
`;
const apps = ["venmo.png", "cashapp.png", "wechat.png"];

export function PaymentWidget() {
  const [showAll, setShowAll] = useState(false);
  const [targetPaymentIndex, setTargetPaymentIndex] = useState(0);
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
    >
      <div
        css={css`
          position: relative;
          padding: 5px;
        `}
      >
        <svg
          onMouseEnter={(e) => {
            setShowAll(true);
          }}
          css={css`
            border-radius: 50%;
            cursor: pointer;
            z-index: 99;
            opacity: 1;
            will-change: transform;
            transition: all 0.5s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
          `}
          width="55"
          height="55"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="27.5" cy="27.5" r="27.5" fill="#5F7FFF" />
          <path
            d="M25.744 33.44L24.664 31.988C24.344 32.052 24.032 32.084 23.728 32.084C22.936 32.084 22.208 31.9 21.544 31.532C20.888 31.164 20.364 30.652 19.972 29.996C19.588 29.332 19.396 28.588 19.396 27.764C19.396 26.94 19.588 26.2 19.972 25.544C20.364 24.888 20.888 24.376 21.544 24.008C22.208 23.64 22.936 23.456 23.728 23.456C24.52 23.456 25.244 23.64 25.9 24.008C26.564 24.376 27.084 24.888 27.46 25.544C27.844 26.2 28.036 26.94 28.036 27.764C28.036 28.484 27.888 29.144 27.592 29.744C27.304 30.336 26.9 30.828 26.38 31.22L28.228 33.44H25.744ZM21.496 27.764C21.496 28.508 21.696 29.104 22.096 29.552C22.504 29.992 23.048 30.212 23.728 30.212C24.4 30.212 24.936 29.988 25.336 29.54C25.744 29.092 25.948 28.5 25.948 27.764C25.948 27.02 25.744 26.428 25.336 25.988C24.936 25.54 24.4 25.316 23.728 25.316C23.048 25.316 22.504 25.536 22.096 25.976C21.696 26.416 21.496 27.012 21.496 27.764ZM33.497 32L31.745 28.82H31.253V32H29.201V23.576H32.645C33.309 23.576 33.873 23.692 34.337 23.924C34.809 24.156 35.161 24.476 35.393 24.884C35.625 25.284 35.741 25.732 35.741 26.228C35.741 26.788 35.581 27.288 35.261 27.728C34.949 28.168 34.485 28.48 33.869 28.664L35.813 32H33.497ZM31.253 27.368H32.525C32.901 27.368 33.181 27.276 33.365 27.092C33.557 26.908 33.653 26.648 33.653 26.312C33.653 25.992 33.557 25.74 33.365 25.556C33.181 25.372 32.901 25.28 32.525 25.28H31.253V27.368Z"
            fill="black"
          />
          <path d="M23 13H11V25" stroke="black" strokeWidth="3" />
          <path
            d="M44 25L43.9341 12.9427L33 13"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M12 32L11.9352 41.9247L24 42"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M33 42L43.9836 42.0172L44 32"
            stroke="black"
            strokeWidth="3"
          />
        </svg>

        {/* <RoundImg
          onMouseEnter={(e) => {
            setShowAll(true);
          }}
          css={css`
            cursor: pointer;
            z-index: 99;
            opacity: 1;
            will-change: transform;
            transition: all 0.5s ease-in-out;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 8px;
          `}
          //   onMouseEnter={(event: any) => {
          //     setTargetPaymentIndex(0);
          //   }}
          //   onMouseLeave={() => {
          //     setTargetPaymentIndex(-1);
          //   }}
          src={`/images/french-fries.png`}
          width={50}
          height={50}
        /> */}
      </div>
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
                cursor: ${showAll ? "pointer" : "default"};
                z-index: 2;
                opacity: ${showAll ? 1 : 0};
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
            {i >= 0 && (
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
