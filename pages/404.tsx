import { FC } from "react";
import { GetStaticProps } from "next";
import { getCategories, getPages } from "../lib/helpers";

const Custom404: FC = () => {
  return <h1>404 - Page Not Found</h1>;
};

export const getStaticProps: GetStaticProps = async () => {
  const pages = getPages();
  const categories = getCategories();

  return {
    props: {
      pages,
      categories,
    },
  };
};

export default Custom404;
