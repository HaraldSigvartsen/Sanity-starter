import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen/types";
import { ISlugPage } from "../slug";

export interface ILandingPage extends ISlugPage {
  heroImage: {
    _type: "image";
    alt: string;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
  title?: string;
  subTitle?: string;
}
