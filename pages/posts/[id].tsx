/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { useState } from "react";
import { getAllPostIds, getPostData, IPostsData } from "../../lib/posts";
import Head from "next/head";
import { formatPostDate } from "../../lib/dateUtils";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { getImage } from "@plaiceholder/next";
import { getPixelsCSS, PixelsCSS } from "@plaiceholder/css";
import { LikeButton } from "../../components/LikeButton";

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
  // const imgFile = await getImage("/images/" + postData.image);

  // const placeholderPixelsCSS = await getPixelsCSS(imgFile);

  return {
    props: {
      postData,
      // placeholderPixelsCSS,
    },
  };
}

export default function Post({
  postData,
}: // placeholderPixelsCSS,
{
  postData: IPostsData;
  // placeholderPixelsCSS: PixelsCSS;
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
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
        className="hide-mobile"
        css={css`
          height: 200px;
          position: sticky;
          top: 100px;
          padding: 10px 30px 10px 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `}
      >
        <LikeButton slug={postData.id} />
      </div>
      <div
        css={css`
          width: clamp(300px, 60%, 64ch);
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          `}
        >
          <h2
            css={css`
              margin: 20px 15px 20px 0;
            `}
          >
            {postData.title}
          </h2>
        </div>
        <span css={css``}>{formatPostDate(postData.date)}</span>

        <Image
          width={700}
          height={500}
          layout="responsive"
          onLoad={() => {
            setImgLoaded(true);
          }}
          src={`/images/${postData.image}`}
        />
        <br />
        <div
          className="hide-desktop"
          css={css`
            display: flex;
          `}
        >
          <LikeButton slug={postData.id} />
        </div>
        <ReactMarkdown>{postData.contentString}</ReactMarkdown>
      </div>
    </div>
  );
}
