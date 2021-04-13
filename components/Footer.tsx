/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export function Footer() {
  return (
    <footer
      css={css`
        font-size: 12px;
        display: flex;
        /* justify-content: flex-end; */
        align-items: center;
        flex: 1 1 auto;
        background-color: var(--color-background-dark);
        min-height: 60px;
        padding: 10px 20px;
      `}
    >
      <span
        css={css`
          color: grey;
        `}
      >
        Kevin Qi &#169; 2021-Today
      </span>
    </footer>
  );
}

// Theme inspired by <a href="https://www.joshwcomeau.com/">Josh Comeau</a>{" "}
// 💖
