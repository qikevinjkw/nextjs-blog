/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconBar } from "../components/IconBar";
import { Title } from "../components/Title";
import { SquigglyLine } from "./SquigglyLine";

const Li = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;

function NavbarLink({ href, name }: { href: string; name: string }) {
  const router = useRouter();
  // console.log("router", router.pathname, href);
  return (
    <Link href={href} passHref>
      <div
        css={css`
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        `}
      >
        <Li>{name}</Li>
        {router.pathname === href && <SquigglyLine />}
      </div>
    </Link>
  );
}

export function Navbar() {
  return (
    <div
      css={css`
        top: 0;
        width: 100%;
        height: 60px;
        background: var(--color-background);
        transition: background-color 0.5s ease;
        display: flex;
        align-items: center;
        padding-left: 40px;
      `}
    >
      <Title />
      <nav
        css={css`
          display: flex;
          margin-left: 80px;
          height: 100%;
        `}
      >
        <ul
          css={css`
            margin: 0;
            display: flex;
            list-style: none;
          `}
        >
          <NavbarLink href="/posts" name="Posts" />
          <NavbarLink href="/books" name="Books" />
          <NavbarLink href="/about" name="About" />
        </ul>
      </nav>
      <IconBar />
    </div>
  );
}
