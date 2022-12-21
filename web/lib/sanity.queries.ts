import { groq } from "next-sanity";

export const landingPageQuery = groq`
*[_type == 'articles']{
    _id,
    title,
    slug,
    pageBuilder
}
`;

export const settingsQuery = groq`
*[_type == "settings"][0]
`;

export const landingpage = groq`
*[_type == "landingPage"][0]
`;