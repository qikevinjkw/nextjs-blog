/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef, forwardRef } from "react";
import { animated, interpolate, useSpring } from "react-spring";

const PostDiv = styled(animated.div)`
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  z-index: 1;
  background: var(--color-post);
`;

const calc = (x, y, itemWidth, itemHeight) => [
  -(y - itemHeight / 2) / 20,
  (x - itemWidth / 2) / 70,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export const PostTile = forwardRef(function (
  {
    cssStyles,
    title,
    date,
    summary,
  }: {
    title?: string;
    date?: string;
    summary?: string;
    cssStyles?: SerializedStyles;
  },
  ref
) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 300, friction: 100 },
  }));
  const divRef = useRef<HTMLDivElement>();

  return (
    <PostDiv
      ref={divRef}
      css={[
        cssStyles,
        css`
          &:hover {
            -webkit-box-shadow: 0px 0px 20px 1px var(--shadow-color-hover);
            box-shadow: 0px 0px 20px 5px var(--shadow-color-hover);
          }
          transition: box-shadow 0.5s ease-in-out;
        `,
      ]}
      onMouseMove={({ clientX, clientY, ...e }) => {
        const { x, y, width, height } = divRef.current?.getBoundingClientRect();
        const [relativeX, relativeY] = [clientX - x, clientY - y];
        return set({ xys: calc(relativeX, relativeY, width, height) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: props.xys?.interpolate(trans) }}
    >
      <span
        css={css`
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        `}
      >
        <h4
          css={css`
            margin: 0;
          `}
        >
          {title}
        </h4>
        <h6
          css={css`
            margin: 0 0 0 10px;
            min-width: 70px;
          `}
        >
          {date}
        </h6>
      </span>
      <br />
      {summary}
      <br />
      <br />
      Click for more 📚
      <br />
    </PostDiv>
  );
});
