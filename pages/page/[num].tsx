import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import PostPreview from "../../components/PostPreview";
import Pagination, { PaginationProps } from "../../components/Pagination";
import {
  getAllSortedPosts,
  getSortedPostsPage,
  getPages,
  getCategories,
  getAllArchivePageNumbers,
} from "../../lib/helpers";
import { POSTS_PER_PAGE } from "../../constants/config";
import { PostData } from "../../types";

type ArchivePageProps = {
  posts: PostData[];
  pagination: PaginationProps;
};

const ArchivePage: FC<ArchivePageProps> = ({ posts, pagination }) => (
  <>
    {posts.map((post) => (
      <PostPreview key={post.slug} {...post} />
    ))}
    <Pagination {...pagination} />
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllArchivePageNumbers();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const currentPage = parseInt(params?.num as string);
  const allPosts = getAllSortedPosts();
  const pagePosts = getSortedPostsPage({ posts: allPosts, page: currentPage });
  const isFirstPage = currentPage === 1;
  const isLastPage =
    Math.floor(allPosts.length / POSTS_PER_PAGE) + 1 === currentPage;
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      posts: pagePosts,
      pagination: { currentPage, isFirstPage, isLastPage },
      pages,
      categories,
    },
  };
};

export default ArchivePage;
