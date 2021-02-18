import Head from "next/head";
import Config from "../constants/config";

export default function Page({ children, meta }) {
  const { title, description } = meta;
  const pageTitle = title ? `${title} | ${Config.title}` : Config.title;
  const pageDescription = description ? description : Config.tagline;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <meta name="Description" content={pageDescription}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <h1>Tsevdos.com</h1>
        <div className="content">{children}</div>
      </main>
    </>
  );
}
