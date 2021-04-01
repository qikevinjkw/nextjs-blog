/* eslint-disable */
/* tslint:disable */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { animated, interpolate, useSprings } from "react-spring";
import { useDrag } from "react-use-gesture";
import { shuffle } from "lodash";

const books = shuffle([
  "/images/atomic_habits.jpeg",
  "/images/captain_underpants.jpeg",
  "/images/naval.jpg",
  "/images/psych_of_money.jpeg",
  "/images/bad_blood.jpeg",
  "/images/bogleheads.jpeg",
  "/images/disrupted.png",
  "/images/outliers.jpeg",
  "/images/suspect_x.jpeg",
]);

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(10deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

export function BookStack() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(books.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
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
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * xdir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const y = isGone ? (200 + window.innerHeight) * ydir : down ? my : 0; // When a card is gone it flys out left or right, otherwise goes back to zero

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
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
      }
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <>
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          css={css`
            position: absolute;
            will-change: transform;
            height: 500px;
            width: 310px;
          `}
          key={i}
          style={{
            transform: interpolate(
              [x, y],
              (x, y) => `translate3d(${x}px,${y}px,0)`
            ),
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: interpolate([rot, scale], trans),
            }}
          >
            <Image src={books[i]} width={310} height={500} draggable={false} />
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}

// const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r, s) =>
//   `perspective(1500px) rotateX(30deg) rotateY(${
//     r / 10
//   }deg) rotateZ(${r}deg) scale(${s})`;

// export function BookStack() {
//   const gone = useRef(new Set()); // The set flags all the cards that are flicked out
//   const [springs, set] = useSprings(books.length, (i) => {
//     console.log("initial set");
//     return {
//       x: 0,
//       y: i * -4,
//       scale: 1,
//       rot: -10 + Math.random() * 20,
//       delay: i * 100,
//       from: {
//         x: 0,
//         rot: 0,
//         scale: 1.5,
//         y: -500,
//       },
//     };
//   }); // Create a bunch of springs using the helpers above
//   console.log("props", springs, set);
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useGesture({
//     onDrag: ({
//       args: [index],
//       down,
//       delta: [xDelta, yDelta],
//       distance,
//       velocity,
//       direction: [xDir],
//     }) => {
//       //   const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
//       const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
//       //   if (!down && trigger) {
//       //     gone.current.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//       //   }
//       //   const isGone = gone.current.has(index);
//       //   const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
//       const x = down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
//       //   const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
//       const rot = xDelta / 100; // How much the card tilts, flicking it harder makes it rotate faster

//       const scale = down ? 1.1 : 1; // Active cards lift up a bit
//       //   console.log("onDrag x=", x);

//       set((i) => {
//         if (i === index) {
//           console.log("set ", xDelta, yDelta);
//           return {
//             // y: yDelta,
//             x: xDelta,
//             rot,
//             scale,
//           };
//         }
//       });
//       //   [index].set({
//       //     x,
//       //     rot,
//       //     scale,
//       //   });
//     },
//     // onDragStart: ({
//     //   args: [index],
//     //   down,
//     //   delta: [xDelta],
//     //   distance,
//     //   velocity,
//     //   direction: [xDir],
//     // }) => {
//     //   console.log("onDrag", index, down, xDelta, distance, velocity, xDir);
//     //   const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
//     //   const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
//     //   if (!down && trigger) {
//     //     gone.current.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//     //   }
//     //   const isGone = gone.current.has(index);
//     //   const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
//     //   const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
//     //   const scale = down ? 1.1 : 1; // Active cards lift up a bit
//     //   springRefs.current[index].set({
//     //     x,
//     //     rot,
//     //     scale,
//     //   });
//     // },
//   });
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//   return (
//     <div>
//       {springs.map(({ x, y, rot, scale }, i) => {
//         console.log("springs x", x);
//         return (
//           <animated.div
//             key={i}
//             style={{
//               transform: interpolate(
//                 [x, y],
//                 (x, y) => `translate3d(${x}px,${y}px,0)`
//               ),
//               //   transform: to([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`),
//             }}
//             css={css`
//               position: absolute;
//               width: 100vw;
//               height: 100vh;
//               will-change: transform;
//               display: flex;
//               align-items: center;
//               justify-content: center;
//             `}
//           >
//             <animated.div
//               {...bind(i)}
//               //   style={{
//               //     transform: interpolate([rot, scale], trans),
//               //   }}
//               css={css`
//                 background-color: white;
//                 background-size: auto 85%;
//                 background-repeat: no-repeat;
//                 background-position: center center;
//                 width: 45vh;
//                 max-width: 300px;
//                 height: 85vh;
//                 max-height: 570px;
//                 will-change: transform;
//                 border-radius: 10px;
//                 box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4),
//                   0 10px 10px -10px rgba(50, 50, 73, 0.3);
//               `}
//             >
//               <Image
//                 draggable={false}
//                 src={books[i]}
//                 alt={books[i]}
//                 width={300}
//                 height={500}
//               />
//             </animated.div>
//           </animated.div>
//           // <animated.div {...bind(i)} key={i}
//           // style={{ transform: interpolate([rot, scale], trans) }}
//           // // style={props}
//           // >
//           //   <Image src={books[i]} alt={books[i]} width={300} height={500} />
//           // </animated.div>
//         );
//       })}
//     </div>
//   );
// }
/**
 *   ({
        args: [index],
        down,
        delta: [xDelta],
        distance,
        direction: [xDir],
        velocity,
      }) => {
        const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
        const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
        if (!down && trigger) gone.current.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
        set((i) => {
          if (index !== i) return; // We're only interested in changing spring-data for the current spring
          const isGone = gone.current.has(index);
          const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
          const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
          const scale = down ? 1.1 : 1; // Active cards lift up a bit
          return {
            x,
            rot,
            scale,
            delay: undefined,
            config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
          };
        });
        if (!down && gone.current.size === books.length)
          setTimeout(() => gone.current.clear() || set((i) => to(i)), 600);
      }
 */
