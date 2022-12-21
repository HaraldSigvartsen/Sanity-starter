import { GetStaticProps } from "next";
import Head from "next/head";
import Landingpage from "../components/landingPage";
import { client } from "../lib/sanity.client";
import { urlFor } from "../lib/sanity.image";
import {
  landingpage,
  landingPageQuery,
  settingsQuery,
} from "../lib/sanity.queries";
import { IArticles } from "../types/articles";
import { ILandingPage } from "../types/landingPage";
import { ISettings } from "../types/settings";

interface Props {
  articles: IArticles[];
  settings: ISettings;
  landingPage: ILandingPage;
}

export default function Home({ articles, settings, landingPage }: Props) {
  return (
    <>
      <Head>
        <title>{settings.title}</title>
        <meta name="description" content={`${settings.description}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO Change icon */}
        <link rel="icon" href={urlFor(settings.logo.asset).url()} />
      </Head>

      <div
        className="h-fit w-auto"
        style={{
          height: "auto",
          backgroundColor: settings.backgroundColor?.hex,
          color: settings.fontColor?.hex,
        }}
      >
        {/* Content */}
        <Landingpage
          settings={settings}
          landingPage={landingPage}
          articles={articles}
        />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const articles = await client.fetch<IArticles[]>(landingPageQuery);
  const settings = await client.fetch<ISettings>(settingsQuery);
  const landingPage = await client.fetch<ILandingPage>(landingpage);
  return {
    props: { articles, settings, landingPage },

    // Fetching data every 5 min
    revalidate: 60 * 5,
  };
};
