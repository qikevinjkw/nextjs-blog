/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import { LightDarkModeIcon } from "../components/LightDarkModeIcon";

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
};
const childCircleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.1,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
    },
  },
};
const groupVariants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 4,
    },
  },
};
export default function Test() {
  return (
    <div
      css={css`
        position: fixed;
        left: 30px;
        top: 30px;
      `}
    >
      <LightDarkModeIcon />
    </div>
  );
}
