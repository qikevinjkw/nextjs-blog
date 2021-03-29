/** @jsx jsx */
import { jsx } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../providers/ThemeProvider";

const svgVariants: Variants = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: 1,
  },
};
const speakerVariants: Variants = {
  initial: {
    rotate: 0,
  },
  animate: {
    rotate: [15, -15, 0],
    transition: {
      duration: 0.2,
    },
  },
};
const squiggleVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};
export function SoundIcon() {
  const muteAudio = useRef<HTMLAudioElement | null>(null);
  const unmuteAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    muteAudio.current = new Audio("/audio/sweep.wav");
    muteAudio.current.volume = 0.5;
    unmuteAudio.current = new Audio("/audio/high-tech.wav");
    unmuteAudio.current.volume = 0.5;
  }, []);
  const { soundEnabled, setSoundEnabled } = useTheme();

  return (
    <motion.span
      whileHover={{
        cursor: "pointer",
      }}
      onClick={() => {
        setSoundEnabled((prev) => {
          if (prev) {
            muteAudio.current?.play();
          } else {
            unmuteAudio.current?.play();
          }
          return !prev;
        });
      }}
    >
      <motion.svg
        width="25px"
        height="25px"
        viewBox="10 20 50 35"
        fill="none"
        variants={svgVariants}
        initial={soundEnabled ? "initial" : "animate"}
        animate={soundEnabled ? "animate" : "initial"}
      >
        <motion.path
          variants={speakerVariants}
          d="M14 23.8961H20.1364H30.3636L41 16V54L30.3636 46.1039H14V23.8961Z"
          fill="grey"
          stroke="grey"
        />

        <motion.path
          variants={squiggleVariants}
          d="M48 25C48 25 51.5 27 51.5 33C51.5 39 48 42 48 42"
          stroke="grey"
          strokeWidth="2"
        />
        <motion.path
          variants={squiggleVariants}
          d="M55 20.5C55 20.5 59 23.5 59 33C59 42.5 55 48 55 48"
          stroke="grey"
          strokeWidth="2"
        />
      </motion.svg>
    </motion.span>
  );
}
