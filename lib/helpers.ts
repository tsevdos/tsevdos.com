import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "./types";
import { POSTS_PER_PAGE } from "./config"

const contentDirectory = path.join(process.cwd(), "_posts");
const fileNames = fs.readdirSync(contentDirectory);

const filenameToData = (filename: string) => {
  const slug = filename.replace(".md", "");
  const fullPath = path.join(contentDirectory, filename);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);

  return { ...data, slug, content, date: data.date, type: data.type, } as PostData;
}

const byPostType = ({type}: PostData) => type === "post";
const byPageType = ({type}: PostData) => type === "page";
const byDate = (postA: PostData, postB: PostData) => +new Date(postB.date) - +new Date(postA.date)
const range = (start:number, stop:number, step:number) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

const getPagesArr = (posts: number ) => {
  const totalCategoryPages = Math.floor(posts / POSTS_PER_PAGE) + 1;

  return range(1, totalCategoryPages, 1).map((v) => v.toString());
}

// Exported fns
export const getAllSlugs = () => fileNames.map((filename) => ({
  params: {
    slug: filename.replace(".md", ""),
  },
}));

export const getAllArchivePageNumbers = () => {
  const totalPosts = fileNames.map(filenameToData).filter(byPostType).length;
  const totalPages = Math.floor(totalPosts / POSTS_PER_PAGE) + 1;
  const pagesArr = range(1, totalPages, 1).map((v) => v.toString());

  return pagesArr.map((v) => ({
    params: {
      num: v,
    },
  }));
}

export const getDataFromSlug = async (slug: string): Promise<string> => {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const content = fs.readFileSync(fullPath, "utf8");

  return content;
};

export const getAllSortedPosts = () => fileNames.map(filenameToData)
  .filter(byPostType)
  .sort(byDate)

export const getSortedPostsPage = (page: number ) => getAllSortedPosts()
  .slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

export const getSortedPostsCategory = (category: string) =>getAllSortedPosts()
  .filter(({categories}) => categories.includes(category));

export const getSortedPostsCategoryPage = ({ page, category } : { page: number; category: string; }) =>
  getSortedPostsCategory(category)
    .slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

export const getCategories = () => {
  return fileNames.map(filenameToData)
  .filter(byPostType)
  .reduce((allCategories, post) => {
    if (post?.categories?.length) {
      const uniqueCategories: string[] = Array.from(new Set([...allCategories, ...post.categories.flat()]));
      return [...uniqueCategories];
    }

    return allCategories;
  }, [] as string[]);
};

export const getAllArchivePageNumbersPerCategory = () => {
  const categories = getCategories();
  const categoryPages = categories.map(
    (category) => {
     const totalCategoryPosts = fileNames.map(filenameToData)
      .filter(byPostType)
      .filter((post: PostData) => post.categories.includes(category)).length;

      return {
        category,
        pagesArr: getPagesArr(totalCategoryPosts)
      };
    });

  const paths = categoryPages.map((obj) => obj.pagesArr.map((page) => ({
    params: {
      category: obj.category,
      pageNum: page
    }
  })));

  return paths.flat();
}

export const getPages = () => fileNames.map(filenameToData)
  .filter(byPageType)
  .reduce((allPages, page) => [...allPages, page], [] as PostData[]);

export const getPagination = (currentPage: number, totalPosts: number) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = Math.floor(totalPosts / POSTS_PER_PAGE) + 1 === currentPage;

  return { currentPage, isFirstPage, isLastPage };
}