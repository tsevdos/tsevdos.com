import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import PostPreview from "../../components/PostPreview";
import {
  getAllCategorySlugs,
  getAllSortedPosts,
  getCategories,
  getPages,
} from "../../lib/helpers";
import { PostData } from "../../types";

type CategoryPageProps = {
  posts: PostData[];
};

const CategoryPage: FC<CategoryPageProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ))}
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllCategorySlugs();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const categoryPosts = getAllSortedPosts().filter((post) =>
    post.categories.includes(params?.slug as string)
  );
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      posts: categoryPosts,
      pages,
      categories,
    },
  };
};

export default CategoryPage;
