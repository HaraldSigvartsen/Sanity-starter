import { groq } from "next-sanity";

export const landingPageQuery = groq`
*[_type == 'articles']{
    _id,
    title,
    slug,
    pageBuilder
}
`;
