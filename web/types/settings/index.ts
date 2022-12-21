import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen/types";

export interface ISettings {
  //Setting these optional, gonna change later after getting some rules in Sanity.
  title?: string;
  description?: string;
  backgroundColor: backgroundColor;
  fontColor?: {
    hex: string;
  };
  logo: {
    _type: "image";
    alt: string;
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

interface backgroundColor {
  hex: string;
}