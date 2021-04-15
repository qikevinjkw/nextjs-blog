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
        max-height: 500px;
      `}
    >
      <div
        css={css`
          width: 100%;
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
      </div>
      <div
        css={css`
          height: 400px;
        `}
      ></div>
      <div
        css={css`
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            color: grey;
            padding: 0 0 5px 5px;
            display: flex;
            align-items: flex-end;
            width: clamp(100px, 25%, 300px);
          `}
        >
          Kevin Qi &#169; 2021-Today
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            width: 50%;
          `}
        >
          <span
            css={css`
              font-size: 18px;
            `}
          >
            Join my newsletter where I talk about bad UI/UX designs
          </span>
          <iframe
            src="https://kevinuiux.substack.com/embed"
            width="480"
            height="120"
            css={css`
              border: none;
            `}
          ></iframe>
        </div>
        <div
          css={css`
            width: clamp(100px, 25%, 300px);
          `}
        >
          {/* Twitter,Github, Instagram */}
        </div>
      </div>
    </footer>
  );
}

// Theme inspired by <a href="https://www.joshwcomeau.com/">Josh Comeau</a>{" "}
// 💖
