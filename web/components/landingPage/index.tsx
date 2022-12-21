import Image from "next/image";
import { urlFor } from "../../lib/sanity.image";

import { IArticles } from "../../types/articles";
import { ILandingPage } from "../../types/landingPage";
import { ISettings } from "../../types/settings";

interface Props {
  articles: IArticles[];
  landingPage: ILandingPage;
  settings: ISettings;
}

const Landingpage = ({ articles, landingPage, settings }: Props) => (
  <div className="h-screen w-screen ">
    {/* <LandingPageHero hero={landingPage.heroImage?.asset} /> */}
    {/* TODO Create a component for Landingpage hero */}
    <div className="flex flex-col pt-0 ">
      <div className=" relative w-full h-36 mb-20">
        {landingPage.heroImage.asset && (
          <div className="mx-10">
            <Image
              fill
              style={{ objectFit: "cover" }}
              alt={`${landingPage.heroImage?.asset}`}
              src={urlFor(landingPage.heroImage.asset || "")?.url()}
            />
          </div>
        )}
        <h1 className="">{landingPage.title}</h1>
      </div>
      {/* TODO Create components for title and subtitle */}
      <div className="my-10 mx-10">
        <h1 className="text-xl font-bold text-center">{landingPage.title}</h1>
        <p className=""> {landingPage.subTitle}</p>
      </div>

      <div
        style={{ backgroundColor: settings?.backgroundColor.hex }}
        className="h-full mb-20"
      >
        {articles.map((oneArticle) => (
          <div className="border w-2/6 h-fit  mx-auto" key={oneArticle.title}>
            {oneArticle.heroImage && (
              <Image
                width={500}
                height={200}
                src={urlFor(oneArticle.heroImage.asset).url()}
                alt={`${oneArticle.heroImage.asset}`}
              />
            )}
            <h2 className="text-xl pl-5">{oneArticle.title}</h2>
            <p></p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Landingpage;
