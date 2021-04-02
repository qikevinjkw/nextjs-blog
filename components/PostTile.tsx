/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { animated, interpolate, useSpring } from "react-spring";

const PostDiv = styled(animated.div)`
  margin: 10px;
  width: 40vw;
  cursor: pointer;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
  padding: 20px;
  background: var(--color-post);
`;

const calc = (x, y, itemWidth, itemHeight) => [
  -(y - itemHeight / 2) / 20,
  (x - itemWidth / 2) / 50,
  1.05,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
export function PostTile({
  cssStyles,
  title,
  date,
  summary,
}: {
  title?: string;
  date?: string;
  summary?: string;
  cssStyles?: SerializedStyles;
}) {
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
            -webkit-box-shadow: 0px 0px 17px 2px rgba(255, 255, 255, 0.85);
            box-shadow: 0px 0px 17px 2px rgba(255, 255, 255, 0.85);
          }
          transition: box-shadow 0.5s ease-in-out;
          -webkit-box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.85);
          box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.85);
        `,
      ]}
      onMouseMove={({ clientX, clientY, ...e }) => {
        const { x, y, width, height } = divRef.current?.getBoundingClientRect();
        const [relativeX, relativeY] = [clientX - x, clientY - y];
        return set({ xys: calc(relativeX, relativeY, width, height) });
      }}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      // @ts-ignore
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <span
        css={css`
          display: flex;
          align-items: flex-end;
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
}

export function Card() {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
    />
  );
}
