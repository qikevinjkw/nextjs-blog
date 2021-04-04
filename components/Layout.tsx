/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion, Variants } from "framer-motion";
import Head from "next/head";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout(props) {
  return (
    <motion.div
      css={css`
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: var(--color-background);
        transition: background-color 0.5s ease;
        overflow-y: scroll;
      `}
      animate={{
        transition: {
          duration: 1,
        },
      }}
    >
      <Navbar />
      <main
        className="main-content"
        css={css`
          flex: 1 1 auto;
        `}
      >
        {props.children}
      </main>
      <Footer />
    </motion.div>
  );
}
