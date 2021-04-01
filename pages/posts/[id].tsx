import React from "react";
import { getAllPostIds, getPostData, IPostsData } from "../../lib/posts";
import Head from "next/head";
import { formatPostDate } from "../../lib/dateUtils";

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
  console.log("postData", postData);
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {formatPostDate(postData.date)}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}
