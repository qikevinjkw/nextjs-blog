/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { NAVBAR_HEIGHT } from "./constants";
import { LightDarkModeIcon } from "./LightDarkModeIcon";
import { SoundIcon } from "./SoundIcon";

export function IconBar() {
  return (
    <div
      className="hide-mobile"
      css={css`
        align-items: center;
        width: 100px;
        > * {
          margin-left: 10px;
        }
      `}
    >
      <LightDarkModeIcon />
      <SoundIcon />
    </div>
  );
}
