import { FC, Fragment } from "react";
import Link from "next/link";
import { GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import { getSortedPosts } from "../lib/helpers";
import { PostData } from "../types";
import styles from "./page.module.css";

type HomeProps = {
  posts: PostData[];
};

const Home: FC<HomeProps> = ({ posts }) => {
  return (
    <>
      {posts.map(({ slug, title, date, content }) => (
        <Fragment key={slug}>
          <article>
            <header className={styles.header}>
              <h2>
                <Link href={`/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h2>
              <p>{new Date(date).toLocaleDateString("el-GR")}</p>
            </header>
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
          <hr className="major" />
        </Fragment>
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
