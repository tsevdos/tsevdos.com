import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import Head from "next/head";
import {
  getAllSlugs,
  getCategories,
  getPages,
  getDataFromSlug,
} from "../lib/helpers";
import ContactForm from "../components/ContactForm";
import { PostData } from "../lib/types";
import Config from "../lib/config";
import styles from "./page.module.css";

const Page: FC<PostData> = ({ title, date, content }) => {
  const formattedDate = new Date(date).toLocaleDateString("el-GR");

  return (
    <>
      <Head>
        <title>{`${title} - ${Config.title}`}</title>
      </Head>

      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{formattedDate}</p>
      </header>
      <hr />
      <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
      {title === "Contact" && <ContactForm />}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSlugs();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postContent = await getDataFromSlug(params?.slug as string);
  const { data, content } = matter(postContent);
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      ...data,
      content,
      pages,
      categories,
    },
  };
};

export default Page;
