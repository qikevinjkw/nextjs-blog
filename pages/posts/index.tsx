/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import { PostTile } from "../../components/PostTile";
import { getSortedPostsData, IPostsData } from "../../lib/posts";
import { parse, compareDesc } from "date-fns";

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
            display: grid;
            list-style: none;
            padding: 5px 40px;
            grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
            gap: 32px;
          `}
        >
          {allPostsData
            .sort((postA, postB) => {
              return compareDesc(
                parse(postA.date, "yyyy-MM-dd", new Date()),
                parse(postB.date, "yyyy-MM-dd", new Date())
              );
            })
            .map((postData, index) => (
              <Link href={`/posts/${postData.id}`} passHref key={postData.id}>
                <PostTile {...postData}></PostTile>
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
