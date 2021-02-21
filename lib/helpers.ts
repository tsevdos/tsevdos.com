import fs from "fs";
import path from "path";

const pagesDirectory = path.join(process.cwd(), "content");

export const getAllPagesSlugs = () => {
  const fileNames = fs.readdirSync(pagesDirectory);

  return fileNames.map((filename) =>  ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
};

export const getPagedata = async (slug: string): Promise<string> => {
  const fullPath = path.join(pagesDirectory, `${slug}.md`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
