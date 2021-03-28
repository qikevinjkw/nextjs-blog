/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useCallback, useRef, useState } from "react";
import Link from "next/link";
import debounce from "lodash/debounce";
import { IconBar } from "../components/IconBar";
import { Title } from "../components/Title";

const LANGUAGES = ["你好", "Hello"] as const;
const FADE_IN_TIME_IN_SEC = 1;
const containerVariants: Variants = {
  initial: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  animate: {
    backgroundColor: "rgba(24,38,54,1)",
    transition: {
      duration: 0.5,
      delay: 6,
    },
  },
};
const variants: Variants = {
  initial: {
    y: "-100%",
    position: "fixed",
    opacity: 0,
  },
  animate: {
    y: 0,
    position: "fixed",
    opacity: 1,

    transition: {
      delay: FADE_IN_TIME_IN_SEC - 0.8,
      duration: FADE_IN_TIME_IN_SEC,
    },
  },
  exit: {
    y: "100%",
    position: "fixed",
    opacity: 0,
    transition: {
      duration: FADE_IN_TIME_IN_SEC,
    },
  },
};
const titleVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: [0, 1, 1],
    x: ["0vw", "0vw", "-42vw"],
    y: ["0vh", "0vh", "-47vh"],
    scale: [5, 5, 2],
    color: ["rgba(0,0,0,1)", "rgba(0,0,0,1)", "rgba(255,255,255,1)"],
    transition: {
      duration: 3,
      delay: 0.8,
      times: [0, 0.4, 1],
    },
  },
};
export default function Home() {
  const [languageIndex, setLanguageIndex] = useState(0);
  const interval = useRef<number>();
  const [cursorX, setCursorX] = useState(0);
  const prevCursorX = useRef(0);

  useEffect(() => {
    interval.current = window.setInterval(() => {
      setLanguageIndex((prev) => {
        if (prev === LANGUAGES.length - 1) {
          clearInterval(interval.current);
        }
        return prev + 1;
      });
    }, FADE_IN_TIME_IN_SEC * 2 * 1000);
  }, []);

  const debounceSetCursorX = useCallback(
    debounce((x: number) => {
      setCursorX((prev) => {
        prevCursorX.current = prev;
        return x;
      });
    }, 500),
    []
  );
  const newDur = Math.ceil(Math.abs(prevCursorX.current - cursorX) / 70);
  return (
    <motion.div
      onMouseMove={(e) => {
        const x = e.clientX;
        debounceSetCursorX(x);
      }}
      css={css`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      `}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Kevin Qi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        {languageIndex < LANGUAGES.length && (
          <motion.div
            variants={variants}
            key={languageIndex}
            css={css`
              font-size: 120px;
            `}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {LANGUAGES[languageIndex]}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {languageIndex === LANGUAGES.length && (
          <motion.div
            variants={titleVariant}
            initial="initial"
            animate="animate"
          >
            <Link href="/test" passHref>
              <div
                css={css`
                  text-decoration: none;
                  cursor: pointer;
                `}
              >
                <Title />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <IconBar />
      {/* <motion.div
        css={css`
          position: fixed;
          bottom: 10px;
          left: 10px;
        `}
        animate={{
          x: cursorX,
          transition: {
            duration: newDur,
            ease: "easeInOut",
          },
        }}
      >
        Cat
      </motion.div> */}
    </motion.div>
  );
}

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
