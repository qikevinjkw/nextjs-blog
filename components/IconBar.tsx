/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { NAVBAR_HEIGHT } from "./constants";
import { LightDarkModeIcon } from "./LightDarkModeIcon";

export function IconBar() {
  return (
    <div
      css={css`
        height: ${NAVBAR_HEIGHT}px;
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        width: 200px;
      `}
    >
      <LightDarkModeIcon />
    </div>
  );
}
