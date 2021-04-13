/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";
import { useAppInit } from "../providers/AppInitProvider";
import { Footer } from "./Footer";
import { MobileMenu } from "./MobileMenu";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { Navbar } from "./Navbar";
import { PaymentWidget } from "./PaymentWidget";

export function Layout(props) {
  const { menuOn } = useAppInit();

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
      <PaymentWidget />
      {menuOn && <MobileMenu />}
      <MobileMenuIcon />
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
