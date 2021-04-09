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
function getLineVariants(rotate: number): Variants {
  return {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate,
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
        z-index: 3;
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
          variants={getLineVariants(180)}
          x1="5"
          y1="21.5"
          x2="26"
          y2="21.5"
          stroke="#5370ff"
          strokeWidth="3"
        />
        <motion.line
          variants={getLineVariants(90)}
          x1="5"
          y1="13.5"
          x2="26"
          y2="13.5"
          stroke="#5370ff"
          strokeWidth="3"
        />
        <motion.line
          variants={getLineVariants(-180)}
          x1="5"
          y1="5.5"
          x2="26"
          y2="5.5"
          stroke="#5370ff"
          strokeWidth="3"
        />
      </motion.svg>
    </motion.div>
  );
}
