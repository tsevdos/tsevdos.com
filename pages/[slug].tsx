import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import { getAllSlugs, getPostdata } from "../lib/helpers";
import Layout from "../components/Layout";
import { PostData } from "../types";
import styles from "./page.module.css";

const Page: FC<PostData> = ({ title, date, content }) => {
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = new Date(date).toLocaleDateString("el-GR", options);

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

  return {
    props: {
      ...data,
      content,
    },
  };
};

export default Page;
