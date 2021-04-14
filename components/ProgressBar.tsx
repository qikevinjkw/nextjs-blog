/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { useEffect, useState } from "react";

export function ProgressBar({ progress }: { progress: number }) {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        width: 100%;
        height: 2px;
      `}
      className="progress-bar"
    >
      <div
        css={css`
          background-color: ${progress === 0 ? "transparent" : "purple"};
          width: ${progress}%;
          height: inherit;
          transition: width 1s ease-in-out;
        `}
      ></div>
    </div>
  );
}
