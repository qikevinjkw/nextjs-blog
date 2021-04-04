/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export function Card({ message, userId }) {
  return (
    <div
      css={css`
        width: 200px;
        height: 50px;
        border-radius: 5px;
        &:hover {
          -webkit-box-shadow: 0px 0px 12px 1px var(--shadow-color-hover);
          box-shadow: 0px 0px 12px 1px var(--shadow-color-hover);
        }
        transition: box-shadow 0.5s ease-in-out;
        -webkit-box-shadow: 0px 0px 8px 1px var(--shadow-color);
        box-shadow: 0px 0px 8px 1px var(--shadow-color);
        padding: 10px;
        margin: 10px;
        background: var(--color-post);
      `}
    >
      {message} by {userId}
    </div>
  );
}
