/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import { useAppInit } from "../providers/AppInitProvider";

const svgVariants: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1,
  },
};
function getLineVariants({
  rotate,
  x,
  y,
}: {
  rotate: number;
  x?: number;
  y?: number;
}): Variants {
  return {
    initial: {
      rotate: 0,
      x: 0,
      y: 0,
      scale: 1,
    },
    animate: {
      rotate,
      x: x ? x : 0,
      y: y ? y : 0,
      scale: 1.1,
    },
  };
}

export function MobileMenuIcon() {
  const { setMenuOn, menuOn } = useAppInit();
  return (
    <motion.div
      className="hide-desktop"
      css={css`
        position: fixed;
        top: 15px;
        right: 15px;
        cursor: pointer;
        z-index: 11;
      `}
      onClick={() => {
        setMenuOn((prev) => !prev);
      }}
    >
      <motion.svg
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        variants={svgVariants}
        initial={menuOn ? "initial" : "animate"}
        animate={menuOn ? "animate" : "initial"}
      >
        <motion.line
          variants={getLineVariants({ rotate: -225, y: 5 })}
          x1="5"
          y1="5.5"
          x2="26"
          y2="5.5"
          stroke="#5370ff"
          strokeWidth="3"
        />
        <motion.line
          variants={getLineVariants({ rotate: 90, x: -7 })}
          x1="5"
          y1="13.5"
          x2="26"
          y2="13.5"
          stroke="#5370ff"
          strokeWidth="3"
        />
        <motion.line
          variants={getLineVariants({ rotate: 225, y: -5 })}
          x1="5"
          y1="21.5"
          x2="26"
          y2="21.5"
          stroke="#5370ff"
          strokeWidth="3"
        />
      </motion.svg>
    </motion.div>
  );
}
