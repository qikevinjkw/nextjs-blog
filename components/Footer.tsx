/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export function Footer() {
  return (
    <footer
      css={css`
        font-size: 12px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex: 1 1 auto;
        min-height: 60px;
      `}
    >
      Theme inspired by <a href="https://www.joshwcomeau.com/">Josh Comeau</a>{" "}
      💖
    </footer>
  );
}
