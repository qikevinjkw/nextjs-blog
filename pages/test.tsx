/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Title } from "../components/Title";
export default function Test() {
  return (
    <div
      css={css`
        position: fixed;
        left: 30px;
        top: 30px;
      `}
    >
      <Title />
    </div>
  );
}
