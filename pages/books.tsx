/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { BookStack } from "../components/BookStack";

export default function Books() {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <BookStack />
    </div>
  );
}
