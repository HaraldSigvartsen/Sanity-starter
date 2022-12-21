import { GetStaticProps } from "next";
import Head from "next/head";
import Landingpage from "../components/landingPage";
import { client } from "../lib/sanity.client";
import { landingPageQuery, settingsQuery } from "../lib/sanity.queries";
import { IArticles } from "../types/articles";
import { ISettings } from "../types/settings";

interface Props {
  articles: IArticles[];
  settings: ISettings;
}

export default function Articles({ articles, settings }: Props) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta name="description" content={`${settings.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO Change icon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="h-screen w-screen"
        style={{
          backgroundColor: settings.backgroundColor?.hex,
          color: settings.fontColor?.hex,
        }}
      ></div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await client.fetch<IArticles[]>(landingPageQuery);
  const settings = await client.fetch<ISettings>(settingsQuery);
  return {
    props: { articles, settings },

    // Fetching data every 5 min
    revalidate: 60 * 5,
  };
};
