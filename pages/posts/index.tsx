/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import { PostTile } from "../../components/PostTile";
import { getSortedPostsData, IPostsData } from "../../lib/posts";

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
              <div
                css={css`
                  &:hover {
                    z-index: 1;
                  }
                `}
              >
                <PostTile {...postData}></PostTile>
              </div>
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
      </section>
    </main>
  );
}
