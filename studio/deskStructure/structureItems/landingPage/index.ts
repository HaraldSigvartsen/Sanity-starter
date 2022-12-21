import {StructureBuilder} from 'sanity/desk'

// prettier-ignore
export const landingPage = (S: StructureBuilder) =>
  S.listItem()
    .title('Landing Page')
    //   .icon(AiFillInfoCircle)
    .schemaType('landingPage')
    .child(S.document().schemaType('landingPage').documentId('landingPage'))