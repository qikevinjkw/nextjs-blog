/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { IconBar } from "../components/IconBar";
import { Title } from "../components/Title";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

const Li = styled.li`
  margin: 10px;
  cursor: pointer;
`;

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
        `}
      >
        <ul
          css={css`
            display: flex;
            list-style: none;
          `}
        >
          <Link href="/posts" passHref>
            <Li>Posts</Li>
          </Link>
          <Link href="/about" passHref>
            <Li>About</Li>
          </Link>
        </ul>
      </nav>
      <IconBar />
    </div>
  );
}
