import {
  SanityReference,
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
} from "sanity-codegen";
import { IPagebuilder } from "../pagebuilder";
import { ISlugPage } from "../slug";

export interface IArticles extends ISlugPage {
  _type: "articles";
  title: string;
  pagebuilder: IPagebuilder[];
  heroImage: {
    _type: "image";
    alt: string;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}
