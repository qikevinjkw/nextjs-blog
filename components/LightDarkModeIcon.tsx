/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";

const mainCircleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.1,
      duration: 1,
    },
  },
  hover: {
    fill: "black",
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.3,
    },
  },
};
function getBaseChildCircleVariants(endCx: number, endCy: number): Variants {
  return {
    hidden: {
      opacity: 0,
      scale: 0.1,
      cx: "15",
      cy: "15",
    },
    hover: {
      fill: "black",
    },
    visible: {
      opacity: 1,
      scale: 1,
      cx: endCx,
      cy: endCy,
      transition: {
        type: "spring",
      },
    },
  };
}

export function LightDarkModeIcon() {
  const [visible, setVisible] = useState(false);
  return (
    <motion.span
      whileHover={{
        cursor: "pointer",
      }}
      onClick={() => {
        setVisible((prev) => !prev);
      }}
    >
      {visible ? <Sun /> : <Moon />}
    </motion.span>
  );
}
function Sun() {
  return (
    <motion.svg
      whileHover="hover"
      width="30"
      height="30"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={mainCircleVariants}
    >
      <motion.circle
        cx="15"
        cy="15"
        r="5"
        fill="grey"
        variants={mainCircleVariants}
      />
      <motion.circle
        r="1.5"
        fill="grey"
        variants={getBaseChildCircleVariants(23, 15)}
      />
      <motion.circle
        r="1.5"
        fill="grey"
        variants={getBaseChildCircleVariants(19, 22)}
      />
      <motion.circle
        cx="6"
        cy="17"
        r="1.5"
        fill="grey"
        variants={getBaseChildCircleVariants(11, 22)}
      />
      <motion.circle
        cx="2"
        cy="10"
        r="1.5"
        fill="grey"
        variants={getBaseChildCircleVariants(7, 15)}
      />
      <motion.circle
        cx="6"
        cy="3"
        r="1.5"
        fill="grey"
        variants={getBaseChildCircleVariants(11, 8)}
      />
      <motion.circle
        cx="14"
        cy="3"
        r="1.5"
        fill="grey"
        variants={getBaseChildCircleVariants(19, 8)}
      />
    </motion.svg>
  );
}

const maskCircleVariants: Variants = {
  hidden: {
    cx: 30,
    cy: 30,
  },
  visible: {
    cx: 20,
    cy: 10,
    transition: {
      duration: 0.5,
    },
  },
};
const moonVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    cx: 15,
    cy: 15,
  },
  hover: {
    fill: "black",
  },
  visible: {
    opacity: 1,
    scale: 1,
    cx: 15,
    cy: 15,
    transition: {
      duration: 0.4,
    },
  },
};

function Moon({ bgColor = "white" }: { bgColor?: string }) {
  return (
    <motion.svg
      whileHover="hover"
      width="30"
      height="30"
      variants={{}}
      initial="hidden"
      animate="visible"
    >
      <motion.circle r="8" fill="grey" variants={moonVariants} />
      <motion.circle r="8" fill={bgColor} variants={maskCircleVariants} />
    </motion.svg>
  );
}
