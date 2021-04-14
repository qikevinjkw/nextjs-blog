/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export function Footer() {
  return (
    <footer
      css={css`
        font-size: 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1 1 auto;
        background-color: var(--color-background-dark);
        max-height: 400px;
        /* padding: 10px 20px; */
      `}
    >
      <svg viewBox="0 0 975 173" fill="none">
        <g clipPath="url(#clip0)">
          <rect width="975" height="173" fill="var(--color-background)" />
          <path
            d="M247 25.627C80 -11.373 0 118.627 0 118.627V276.627H975V50.627C975 50.627 776 123.627 666 151.627C556 179.627 414 62.627 247 25.627Z"
            fill="var(--color-background-dark)"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="975" height="173" fill="var(--color-background)" />
          </clipPath>
        </defs>
      </svg>

      <span
        css={css`
          color: grey;
          margin-right: auto;
          margin-top: auto;
          padding: 0 0 5px 5px;
        `}
      >
        Kevin Qi &#169; 2021-Today
      </span>
    </footer>
  );
}

// Theme inspired by <a href="https://www.joshwcomeau.com/">Josh Comeau</a>{" "}
// 💖
