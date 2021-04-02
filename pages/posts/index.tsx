/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { getSortedPostsData, IPostsData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import { Card, PostTile } from "../../components/PostTile";

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
        <title>Posts </title>
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
        <div
          css={css`
            padding: 5px;
            display: flex;
            justify-content: center;
            list-style: none;
            flex-wrap: wrap;
          `}
        >
          {allPostsData.map((postData, index) => (
            <Link href={`/posts/${postData.id}`} passHref key={postData.id}>
              <>
                <PostTile {...postData}></PostTile>
              </>
            </Link>
          ))}
          {allPostsData.length % 2 === 1 ? (
            <PostTile
              cssStyles={css`
                visibility: hidden;
              `}
            ></PostTile>
          ) : null}
        </div>
        <Card />
      </section>
    </main>
  );
}
