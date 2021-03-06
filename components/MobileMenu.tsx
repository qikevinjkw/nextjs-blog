/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAppInit } from "../providers/AppInitProvider";
import { LightDarkModeIcon } from "./LightDarkModeIcon";
import { Routes } from "./Navbar";

function MobileLink({ href, name }: { href: string; name: string }) {
  const { setMenuOn } = useAppInit();

  return (
    <Link href={href}>
      <div
        onClick={() => {
          setMenuOn(false);
        }}
        css={css`
          width: 80%;
          height: 40px;
          margin: 10px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <a
          css={css`
            cursor: pointer;
          `}
        >
          {name}
        </a>
      </div>
    </Link>
  );
}
export function MobileMenu() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.95,
      }}
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;
        background: var(--color-background);
        transition: background-color 0.5s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
      `}
    >
      <LightDarkModeIcon />

      {Routes.map(({ href, name }) => {
        return <MobileLink key={href} href={href} name={name} />;
      })}
    </motion.div>
  );
}
