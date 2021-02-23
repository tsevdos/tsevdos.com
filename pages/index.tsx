import { FC } from "react";
import Link from "next/link";
import { getSortedPosts } from "../lib/helpers";
import { GetStaticProps } from "next";
import { PostData } from "../types";

type HomeProps = {
  posts: PostData[];
};

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <>
      {posts.map(({ title, slug }) => (
        <h3>
          <Link href={`/${slug}`}>
            <a>{title}</a>
          </Link>
        </h3>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
