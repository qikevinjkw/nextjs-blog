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
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center; */
        background-color: var(--color-background);
        transition: background-color 0.5s ease;
      `}
      animate={{
        transition: {
          duration: 1,
        },
      }}
    >
      <Head>
        <title>Kevin Qi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
    </motion.div>
  );
}
