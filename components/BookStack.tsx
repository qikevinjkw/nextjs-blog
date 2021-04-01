/* eslint-disable */
/* tslint:disable */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { animated, interpolate, useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import { shuffle } from "lodash";
import { BookDisplayMode } from "../pages/books";
import { isBrowser } from "../lib/utils";

const BOOKS: string[] = [
  "/images/chaosmonkeys.jpeg",
  "/images/harrypotter.jpeg",
  "/images/howtofail.jpeg",
  "/images/atomic_habits.jpeg",
  "/images/captain_underpants.jpeg",
  "/images/naval.jpg",
  "/images/psych_of_money.jpeg",
  "/images/bad_blood.jpeg",
  "/images/bogleheads.jpeg",
  "/images/disrupted.png",
  "/images/outliers.jpeg",
  "/images/suspect_x.jpeg",
];
const BOOK_WIDTH = 310;
const BOOK_HEIGHT = 500;
function getScreenMid() {
  if (!isBrowser()) {
    return {};
  }
  return {
    x: window.innerWidth / 2 - BOOK_WIDTH / 2,
    y: window.innerHeight / 2 - BOOK_HEIGHT / 2,
  };
}
const to = (i: number, displayMode: BookDisplayMode) => {
  if (!isBrowser()) {
    return {};
  }
  if (displayMode === "stacked") {
    return {
      ...getScreenMid(),
      scale: 1,
      rot: -10 + Math.random() * 20,
      // delay: i * 100,
    };
  }

  const scale = 0.5;
  const newWidth = BOOK_WIDTH * scale;
  const newHeight = BOOK_HEIGHT * scale;
  const booksPerRow = Math.floor(window.innerWidth / newWidth);

  return {
    x: (i % booksPerRow) * newWidth - 50,
    y: Math.floor(i / booksPerRow) * newHeight,
    minHeight: newHeight,
    minWidth: newWidth,
    scale,
  };
};
const from = (i: number, displayMode: BookDisplayMode) => {
  return { x: 0, rot: 0, scale: 1, y: 1000 };
};
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(10deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export function BookStack({ displayMode }: { displayMode: BookDisplayMode }) {
  const [books, setBooks] = useState(BOOKS);
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  // @ts-ignore
  const [props, set] = useSprings(books.length, (i) => ({
    ...to(i, displayMode),
    from: from(i, displayMode),
  })); // Create a bunch of springs using the helpers above

  useEffect(() => {
    // @ts-ignore
    set((i: number) => {
      // const isGone = gone.has(index);
      // const x = isGone ? (200 + window.innerWidth) * xdir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
      // const y = isGone ? (200 + window.innerHeight) * ydir : down ? my : 0; // When a card is gone it flys out left or right, otherwise goes back to zero

      // const rot = mx / 100 + (isGone ? xdir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
      // const scale = down ? 1.1 : 1; // Active cards lift up a bit
      return to(i, displayMode);
    });
  }, [displayMode]);

  const bind = useDrag(
    ({
      args: [index],
      down,
      movement: [mx, my],
      direction: [xDir, yDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const xdir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      const ydir = yDir < 0 ? -1 : 1; // Direction should either point left or right

      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      // @ts-ignore
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const { x: startX, y: startY } = getScreenMid();
        const x = isGone
          ? (200 + window.innerWidth) * xdir
          : down
          ? startX + mx
          : startX;
        const y = isGone
          ? (200 + window.innerHeight) * ydir
          : down
          ? startY + my
          : startY;

        const rot = mx / 100 + (isGone ? xdir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          y,
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === books.length) {
        setTimeout(() => {
          setBooks((prev) => shuffle(prev));
          gone.clear();
          // @ts-ignore
          set((i) => to(i));
        }, 600);
      }
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale, minHeight, minWidth }, i) => {
        return (
          <animated.div
            key={i}
            style={{
              position: "absolute",
              willChange: "transform",
              transform: interpolate(
                [x, y],
                (x, y) => `translate(${x}px,${y}px)`
              ),
            }}
          >
            <animated.div
              {...(displayMode === "stacked" ? bind(i) : {})}
              style={{
                willChange: "transform",
                transform: interpolate([rot, scale], trans),
              }}
            >
              <Image
                css={css`
                  /* min-height: ${BOOK_HEIGHT}px;
                  min-width: ${BOOK_WIDTH}px; */
                `}
                src={books[i]}
                width={BOOK_WIDTH}
                height={BOOK_HEIGHT}
                draggable={false}
              />
            </animated.div>
          </animated.div>
        );
      })}
    </>
  );
}
