/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export function Footer() {
  return (
    <footer
      css={css`
        position: relative;
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
      `}
    >
      Inspired by <a href="https://www.joshwcomeau.com/">Josh Comeau</a> 💖
    </footer>
  );
}
