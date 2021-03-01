import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "_posts");

export const getAllSlugs = () => {
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames.map((filename) =>  ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
};

export const getPostdata = async (slug: string): Promise<string> => {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const content = fs.readFileSync(fullPath, "utf8");

  return content;
};

export const getSortedPosts = () => {
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames.map((filename) => {
    const slug = filename.replace(".md", "");
    const fullPath = path.join(contentDirectory, filename);
    const file = fs.readFileSync(fullPath, "utf8");
    const { data, content }  = matter(file);

    return {
      ...data,
      slug,
      content,
      date: data.date,
      type: data.type,
    };
  })
  .filter((post) => post.type === "post")
  .sort((postA, postB): any => {
    return +new Date(postB.date) - +new Date(postA.date);
  });
};
