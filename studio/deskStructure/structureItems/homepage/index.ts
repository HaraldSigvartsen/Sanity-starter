import {StructureBuilder} from 'sanity/desk'

// prettier-ignore
export const homepage = (S: StructureBuilder) =>
S.listItem()
.title('Landing Page')
//   .icon(AiFillInfoCircle)
  .schemaType('homepage')
  .child(S.document().schemaType('homepage').documentId('homepage'));