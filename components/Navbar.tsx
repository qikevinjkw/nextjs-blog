/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconBar } from "../components/IconBar";
import { Title } from "../components/Title";
import { NAVBAR_HEIGHT } from "./constants";
import { SquigglyLine } from "./SquigglyLine";
import { MobileMenuIcon } from "./MobileMenuIcon";

const Li = styled.li`
  margin: 0 10px;
  cursor: pointer;
`;

function NavbarLink({ href, name }: { href: string; name: string }) {
  const router = useRouter();
  // console.log("router ", router.pathname, href);
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
        position: sticky;
        top: 0;
        width: 100%;
        min-height: ${NAVBAR_HEIGHT}px;
        background: var(--color-background);
        transition: background-color 0.5s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
        `}
      >
        <Title />
        <nav
          css={css`
            margin-left: 80px;
          `}
          className="hide-mobile"
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
      </div>
      <IconBar />
    </div>
  );
}
