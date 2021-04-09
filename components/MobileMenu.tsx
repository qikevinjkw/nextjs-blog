/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";
import Link from "next/link";

function MobileLink({ href, name }: { href: string; name: string }) {
  return (
    <Link href={href}>
      <div
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
        z-index: 2;
        background: var(--color-background);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 60px;
      `}
    >
      <MobileLink href="/posts" name="Posts" />
      <MobileLink href="/books" name="Books" />
      <MobileLink href="/about" name="About" />
    </motion.div>
  );
}
