/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { getSortedPostsData, IPostsData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";

const Li = styled.li`
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 14px 3px rgba(0, 0, 0, 0.54);
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.14);
  padding: 20px;
  background: var(--color-post);
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Posts({
  allPostsData,
}: {
  allPostsData: IPostsData[];
}) {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      <Head>
        <title>Posts</title>
      </Head>
      <span
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <h2>Posts</h2>
      </span>
      <section>
        <ul
          css={css`
            margin: 50px;
            padding: 5px;
            display: flex;
            list-style: none;
            flex-direction: column;
          `}
        >
          {allPostsData.map(({ id, date, title }) => (
            <Link href={`/posts/${id}`} passHref key={id}>
              <Li>
                <span
                  css={css`
                    display: flex;
                    align-items: flex-end;
                  `}
                >
                  <h4
                    css={css`
                      margin: 0;
                    `}
                  >
                    {title}
                  </h4>
                  <h6
                    css={css`
                      margin: 0 0 0 10px;
                    `}
                  >
                    {date}
                  </h6>
                </span>
                <br />
                Click for more 📚
                <br />
              </Li>
            </Link>
          ))}
        </ul>
      </section>
    </main>
  );
}
