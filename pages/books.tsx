/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { BookStack } from "../components/BookStack";
import Head from "next/head";
import { useState } from "react";
import { capitalize } from "lodash";

export type BookDisplayMode = "stacked" | "flat";
export default function Books() {
  const [displayMode, setDisplayMode] = useState<BookDisplayMode>("stacked");
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          height: 60px;
          margin-top: 20px;
          display: flex;
          justify-content: center;
        `}
      >
        <button
          css={css`
            width: 110px;
            height: 50px;
            background: hsl(277deg 100% 33%);
            border-radius: 12px;
            border: none;
            padding: 0;
            cursor: pointer;
            outline-offset: 4px;
            outline: none;

            &:hover > span {
              transform: translateY(-4px);
              transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
            }
            &:active > span {
              transform: translateY(-2px);
              transition: transform 34ms;
            }
          `}
          onClick={() => {
            setDisplayMode((prev) => (prev === "flat" ? "stacked" : "flat"));
          }}
        >
          <span
            css={css`
              display: block;
              padding: 12px 12px;
              border-radius: 12px;
              font-size: 1.25rem;
              background: hsl(277deg 100% 47%);
              color: white;
              transform: translateY(-3px);
              will-change: transform;
              transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
            `}
          >
            {capitalize(displayMode)}
          </span>
        </button>
      </div>
      <div
        css={css`
          width: 100%;
          height: 100%;
          display: flex;
          /* justify-content: center;
          align-items: center; */
        `}
      >
        <Head>
          <title>Favorite Books</title>
        </Head>
        <BookStack displayMode={displayMode} />
      </div>
    </div>
  );
}
