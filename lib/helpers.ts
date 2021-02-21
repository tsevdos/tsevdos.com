import fs from "fs";
import path from "path";

const postDirectory = path.join(process.cwd(), "content");

export const getAllPagesSlugs = () => {
  const fileNames = fs.readdirSync(postDirectory);

  return fileNames.map((filename) =>  ({
    params: {
      slug: filename.replace(".md", "")
    }
  }));
};

//Get Post based on Slug
export const getPagedata = async (slug: string): Promise<string> => {
  const fullPath = path.join(postDirectory, `${slug}.md`);
  const postContent = fs.readFileSync(fullPath, "utf8");

  return postContent;
};
