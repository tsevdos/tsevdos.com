import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Config from "../constants/config";
import { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
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
            <section>
              <Component {...pageProps} />
            </section>
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default MyApp;
