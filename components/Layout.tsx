/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import { Navbar } from "./Navbar";

export function Layout(props) {
  return (
    <motion.div
      css={css`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        /* align-items: center;
        justify-content: center;  */
        background-color: var(--color-background);
        transition: background-color 0.5s ease;
        overflow: auto;
      `}
      animate={{
        transition: {
          duration: 1,
        },
      }}
    >
      <Navbar />
      <main
        css={css`
          width: 100%;
          height: 100%;
        `}
      >
        {props.children}
      </main>
    </motion.div>
  );
}
