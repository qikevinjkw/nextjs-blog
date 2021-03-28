/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { IconBar } from "../components/IconBar";
import { Title } from "../components/Title";

export function Navbar() {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        width: 100%;
        height: 60px;
        background: var(--color-background);
        display: flex;
        align-items: center;
        padding-left: 40px;
      `}
    >
      <Title />
      <IconBar />
    </div>
  );
}
