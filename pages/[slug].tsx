import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import {
  getAllSlugs,
  getCategories,
  getPages,
  getPostdata,
} from "../lib/helpers";
import { PostData } from "../types";
import styles from "./page.module.css";

const Page: FC<PostData> = ({ title, date, content }) => {
  const formattedDate = new Date(date).toLocaleDateString("el-GR");

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{formattedDate}</p>
      </header>
      <hr />
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSlugs();

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postContent = await getPostdata(params?.slug as string);
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
