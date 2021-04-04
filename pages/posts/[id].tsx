/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { getAllPostIds, getPostData, IPostsData } from "../../lib/posts";
import Head from "next/head";
import { formatPostDate } from "../../lib/dateUtils";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { ThumbsUp } from "../../components/ThumbsUp";

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }: { postData: IPostsData }) {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
      `}
    >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div
        css={css`
          width: 600px;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: flex-end;
          `}
        >
          <h2>{postData.title}</h2>
          {formatPostDate(postData.date)}
        </div>
        <div
          css={css`
            width: 600px;
            height: 400px;
          `}
          className="kevin"
        >
          <Image
            css={css`
              object-fit: contain;
            `}
            width={600}
            height={400}
            layout="intrinsic"
            src={`/images/${postData.image}`}
          />
        </div>
        <br />
        <ReactMarkdown>{postData.contentString}</ReactMarkdown>
      </div>
    </div>
  );
}
