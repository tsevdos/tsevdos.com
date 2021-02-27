import { FC, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Config from "../constants/config";

const Layout: FC = ({ children }) => {
  useEffect(() => {
    const mainScript = document.createElement("script");
    mainScript.src = "/assets/js/main.js";
    document.getElementsByTagName("head")[0].appendChild(mainScript);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${Config.title} | ${Config.tagline}`}</title>
        <meta name="Description" content={Config.tagline}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="/assets/css/main.css" />
      </Head>
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <Header />
            <section>{children}</section>
          </div>
        </div>
        <Sidebar />
      </div>

      <script src="/assets/js/jquery.min.js"></script>
      <script src="/assets/js/browser.min.js"></script>
      <script src="/assets/js/breakpoints.min.js"></script>
      <script src="/assets/js/util.js"></script>
    </>
  );
};

export default Layout;
