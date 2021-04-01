/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Title } from "../components/Title";
import { useSpring, animated } from "react-spring";
import { BookStack } from "../components/BookStack";

export default function Test() {
  const props = useSpring({
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 1, color: "rgb(14,26,19)" },
    ],
    from: { opacity: 1, color: "red" },
  });

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
