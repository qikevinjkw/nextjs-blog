import { getSortedPostsData, IPostsData } from "../../lib/posts";
import Head from "next/head";

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
  console.log("posts", allPostsData);
  return (
    <main>
      <Head>
        <title>Posts</title>
      </Head>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
