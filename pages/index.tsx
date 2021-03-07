import { FC } from "react";
import { GetStaticProps } from "next";
import PostPreview from "../components/PostPreview";
import Pagination from "../components/Pagination";
import {
  getAllSortedPosts,
  getSortedPostsPage,
  getPages,
  getCategories,
} from "../lib/helpers";
import { PostData } from "../lib/types";

type HomeProps = {
  posts: PostData[];
};

const Home: FC<HomeProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ))}
    <Pagination currentPage={1} isFirstPage={true} isLastPage={false} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getAllSortedPosts();
  const indexPosts = getSortedPostsPage({ posts: allPosts, page: 1 });
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      posts: indexPosts,
      pages,
      categories,
    },
  };
};

export default Home;
