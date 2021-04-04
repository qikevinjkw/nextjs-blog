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
        css={css`
          width: 600px;
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
        <div
          css={css`
            width: 600px;
            height: 400px;
            position: relative;
          `}
          className="kevin"
        >
          {/* {placeholderPixelsCSS && !imgLoaded && (
            <div
              className="kevin"
              // className={cx("absolute", "inset-0", "w-full", "h-full")}
              style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                filter: "blur(10px)",
                // transform: "scale(.95)",
                ...placeholderPixelsCSS,
              }}
            />
          )} */}
          <Image
            css={css`
              object-fit: contain;
            `}
            width={600}
            height={400}
            onLoad={() => {
              setImgLoaded(true);
            }}
            src={`/images/${postData.image}`}
          />
        </div>
        <br />
        <ReactMarkdown>{postData.contentString}</ReactMarkdown>
      </div>
    </div>
  );
}
