/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";

const svgVariants: Variants = {
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      staggerChildren: 0.3,
    },
  },
};

const pathVariants: Variants = {
  initial: {
    pathLength: 0,
    fill: "none",
    opacity: 0,
  },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};
export function SquigglyLine() {
  return (
    <motion.svg
      variants={svgVariants}
      initial="initial"
      animate="animate"
      css={css`
        position: absolute;
        top: 40px;
      `}
      width="27"
      height="13"
      viewBox="0 0 77 39"
      fill="none"
    >
      <motion.path
        variants={pathVariants}
        d="M3 24.7813C4.14127 26.5964 5.40831 28.1998 7.19568 29.1951C10.8078 31.2066 15.4611 32.4251 19.4316 33.0752C21.8976 33.4789 24.6718 34.1773 27.1559 33.9374C30.6748 33.5976 35.7575 31.6544 38.0049 28.3123C43.486 20.1617 30.9685 16.2769 27.6825 23.1389C26.1425 26.3548 28.8381 30.042 30.9829 31.6381C34.615 34.3411 41.3561 35.8909 45.4132 34.4507C51.5848 32.2597 56.1242 27.3447 58.8604 20.7164C59.61 18.9008 59.8786 16.9953 59.8786 15.0092C59.8786 13.5051 60.3038 11.3001 59.5626 10"
        stroke="var(--squiggly-line)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <motion.path
        variants={pathVariants}
        d="M48 11.1367C51.1889 9.05475 54.2719 6.73129 57.4468 4.65845C58.6615 3.86539 59.1908 3.42885 60.4328 3.08857C61.2201 2.87289 61.6549 3.28198 62.2561 3.86549C64.692 6.22956 66.9958 9.33573 69.1485 12.0669C70.1383 13.3227 71.1846 14.7207 72.4069 15.6863C72.966 16.128 74.2242 16.1564 74.2853 16.9622"
        stroke="var(--squiggly-line)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
    // <motion.svg
    //   css={css`
    //     margin-left: 10px;
    //     position: absolute;
    //     top: 40px;
    //   `}
    //   width="28"
    //   height="18"
    //   viewBox="0 0 28 18"
    //   fill="none"
    // >
    //   <motion.path
    //     initial={{
    //       pathLength: 0,
    //       fill: "none",

    //       opacity: 0,
    //     }}
    //     animate={{
    //       opacity: 1,
    //       pathLength: 1,

    //       transition: {
    //         duration: 1.2,
    //         ease: "easeInOut",
    //       },
    //     }}
    //     d="M15 5.50602C16.5256 4.40558 19.0109 3.17428 20.0018 1.44024C20.5345 0.50792 21.1545 1.28178 21.8445 1.70349C23.1763 2.51732 24.2992 3.80892 25.5886 4.71626C26.1268 5.09503 26.8201 5.71672 27.1096 6.29577M0.817566 13.4668C1.92749 14.2519 10.4765 19.0169 11.6602 16.4037M11.6602 16.4037C11.8305 16.0276 11.8483 15.4987 11.6694 14.7831C11.2455 13.0874 8.78784 11.968 9.5835 13.9933C10.0286 15.1263 10.763 15.9104 11.6602 16.4037ZM11.6602 16.4037C14.7696 18.1136 19.8333 16.33 21.5761 13.4668C22.9441 11.2195 21.5761 6.9325 21.5761 4.49999"
    //     stroke="#FFEE51"
    //     stroke-linecap="round"
    //     stroke-linejoin="round"
    //     strokeWidth="2"
    //   />
    // </motion.svg>
  );
}
