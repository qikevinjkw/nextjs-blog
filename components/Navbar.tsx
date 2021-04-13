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

export const Routes: { href: string; name: string }[] = [
  {
    href: "/posts",
    name: "Posts",
  },
  {
    href: "/about",
    name: "About",
  },
];

export function Navbar() {
  return (
    <div
      css={css`
        position: sticky;
        z-index: 5;
        top: 0;
        min-height: ${NAVBAR_HEIGHT}px;
        background: var(--color-background-dark);
        transition: background-color 0.5s ease;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
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
            {Routes.map(({ href, name }) => {
              return <NavbarLink key={href} href={href} name={name} />;
            })}
          </ul>
        </nav>
      </div>
      <IconBar />
    </div>
  );
}
