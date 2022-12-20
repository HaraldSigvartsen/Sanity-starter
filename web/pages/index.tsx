import { GetStaticProps } from "next";
import Head from "next/head";
import Landingpage from "../components/landingPage";
import { client } from "../lib/sanity.client";
import { landingPageQuery } from "../lib/sanity.queries";
import { IArticles } from "../types/articles";

interface Props {
  articles: IArticles[];
}

export default function Home({ articles }: Props) {
  return (
    <>
      <Head>
        <title>Sanity Starter</title>
        <meta
          name="description"
          content="Sanity starter with NextJS, TypeScript and TailwindCSS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO Change icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Content1 */}
      <Landingpage articles={articles} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await client.fetch<IArticles[]>(landingPageQuery);
  return {
    props: { articles },

    // Fetching data every 5 min
    revalidate: 60 * 5,
  };
};
