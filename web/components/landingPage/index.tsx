import Image from "next/image";
import { urlFor } from "../../lib/sanity.image";

import { IArticles } from "../../types/articles";
import { ILandingPage } from "../../types/landingPage";

interface Props {
  articles: IArticles[];
  landingPage: ILandingPage;
}

const Landingpage = ({ articles, landingPage }: Props) => (
  <div className="h-screen  w-full ">
    {/* <LandingPageHero hero={landingPage.heroImage?.asset} /> */}
    {/* TODO Create a component for Landingpage hero */}
    <div className="flex flex-col pt-10">
      {landingPage.heroImage.asset && (
        <div className="mx-10">
          <Image
            alt={`${landingPage.heroImage?.asset}`}
            src={urlFor(landingPage.heroImage.asset || "")?.url()}
            width={800}
            height={400}
          />
        </div>
      )}
      <p className="my-10 mx-10"> {landingPage.subTitle}</p>
    </div>
  </div>
);
export default Landingpage;
