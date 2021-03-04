import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "../types";

const POSTS_PER_PAGE = 10;
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

// Exported fns
export const getAllSlugs = () => fileNames.map((filename) => ({
  params: {
    slug: filename.replace(".md", ""),
  },
}));

export const getDataFromSlug = async (slug: string): Promise<string> => {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const content = fs.readFileSync(fullPath, "utf8");

  return content;
};

export const getSortedPosts = (page: number = 1) => fileNames.map(filenameToData)
  .filter(byPostType)
  .sort(byDate)
  .slice(page - 1, POSTS_PER_PAGE);

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

export const getPages = () => fileNames.map(filenameToData)
  .filter(byPageType)
  .reduce((allPages, page) => [...allPages, page], [] as PostData[]);
