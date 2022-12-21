import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./sanity.api";
import type { Image } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import config from "next/config";
import { client } from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
