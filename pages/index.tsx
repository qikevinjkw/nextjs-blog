/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const LANGUAGES = ["Mandarin", "English"] as const;
type Language = typeof LANGUAGES[number];
const LanguageToWelcome: Record<Language, string> = {
  Mandarin: "你好",
  English: "Hello",
};
const FADE_IN_TIME_IN_SEC = 1;

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
    opacity: 1,
    y: ["0vh", "0vh", "0vh", "0vh", "-47vh"],
    scale: [5, 5, 5, 5, 2],
    transition: {
      delay: 0.5,
      duration: 3,
      times: [0, 0.1, 0.2, 0.5, 1],
    },
  },
  // exit: {
  //   fontSize: 36
  // }
};
export default function Home() {
  const [languageIndex, setLanguageIndex] = useState(0);
  const interval = useRef<number>();

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

  return (
    <div
      css={css`
        height: 100%;
        width: 100%;
      `}
    >
      <Head>
        <title>Kevin Qi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial
        css={css`
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `}
      >
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
              {LanguageToWelcome[LANGUAGES[languageIndex]]}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {languageIndex === LANGUAGES.length && (
            <motion.div
              variants={titleVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Link href="/test" passHref>
                <div
                  css={css`
                    text-decoration: none;
                    cursor: pointer;
                  `}
                >
                  Kevin Qi
                </div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <motion.button
          animate="visible"
          variants={buttonVariants}
          whileHover="hover"
        >
          Hello
        </motion.button> */}
      </motion.div>
    </div>
  );
}

const buttonVariants = {
  hidden: {
    x: 0,
    y: 0,
  },
  visible: {
    x: [0, 100, -100],
    y: [0, 100, -100],
    transition: {
      duration: 8,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity,
      duration: 0.5,
    },
  },
};
