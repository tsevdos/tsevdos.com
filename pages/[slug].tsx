import { FC } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import rehypeRaw from "rehype-raw";
import Head from "next/head";
import { getAllSlugs, getCategories, getPages, getDataFromSlug } from "../lib/helpers";
import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";
import { PostData } from "../lib/types";
import Config from "../lib/config";

type PageProps = {
  pages: PostData[];
  categories: string[];
  title: PostData["title"];
  postCategories: PostData["categories"];
  date: PostData["date"];
  type: PostData["type"];
  content: PostData["content"];
};

const Page: FC<PageProps> = ({ pages, categories, title, type, postCategories, date, content }) => {
  const isContactPage = title === "Contact";
  const isPost = type === "post";
  const formattedDate = new Date(date).toLocaleDateString("en-GB");

  return (
    <>
      <Head>
        <title>{`${title} - ${Config.title}`}</title>
      </Head>
      <Layout pages={pages} categories={categories}>
        <div className="bg-white">
          <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="text-center prose prose-indigo prose-lg mx-auto">
              {isPost && (
                <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                  {postCategories.map((cat) => cat).join(", ")}
                </div>
              )}
              <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{title}</h1>
              {isPost && (
                <p className="text-lg font-semibold md:text-xl md:leading-relaxed text-gray-600 lg:w-2/3 mx-auto">
                  {formattedDate}
                </p>
              )}
            </div>

            <article className="prose prose-indigo prose-lg mx-auto">
              {isContactPage ? (
                <ContactForm />
              ) : (
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
              )}
            </article>
          </div>
        </div>
      </Layout>
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
      postCategories: data.categories ?? [],
      content,
      pages,
      categories,
    },
  };
};

export default Page;
