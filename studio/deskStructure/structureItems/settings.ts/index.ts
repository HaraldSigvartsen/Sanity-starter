import { StructureBuilder } from "sanity/desk";


// prettier-ignore
export const settings = (S: StructureBuilder) =>
S.listItem()
.title('Settings')
//   .icon(AiFillInfoCircle)
  .schemaType('settings')
  .child(S.document().schemaType('settings').documentId('settings'));