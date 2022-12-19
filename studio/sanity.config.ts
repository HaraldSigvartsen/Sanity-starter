import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity starter',

  projectId: 'm2i3zuya',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), deskTool({
    name: 'content',
    title: 'Content',
    structure: (S) => S.list()
      .title('Content')
      .items([
        S.documentTypeListItem('articles'),
        S.divider(),
        S.listItem()
          .title('Settings')
          .child(S.editor().schemaType('settings').documentId('settings')),
      ]),
  })],

  schema: {
    types: schemaTypes,
  },
})
