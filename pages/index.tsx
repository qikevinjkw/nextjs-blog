/** @jsx jsx */
import { jsx } from "@emotion/react";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Kevin Qi</title>
      </Head>
      <div>I'm not a cat</div>
    </main>
  );
}

/**
 *  
 * Fade in when scroll with framer https://stackoverflow.com/questions/58958972/framer-motion-animate-when-element-is-in-view-when-you-scroll-to-element
 * Realtime canvas https://www.youtube.com/watch?v=i6eP1Lw4gZk&ab_channel=TheCodingTrain
const containerVariants: Variants = {
  initial: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  animate: {
    backgroundColor: "var(--color-background)",
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
 *  useEffect(() => {
    interval.current = window.setInterval(() => {
      setLanguageIndex((prev) => {
        if (prev === LANGUAGES.length - 1) {
          clearInterval(interval.current);
        }
        return prev + 1;
      });
    }, FADE_IN_TIME_IN_SEC * 2 * 1000);
  }, []);
 *  <AnimatePresence>
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
 * <AnimatePresence>
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
 */
