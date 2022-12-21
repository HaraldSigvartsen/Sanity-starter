import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {theme} from 'https://themer.sanity.build/api/hues?preset=verdant'
import { structure } from './deskStructure'
import { defaultDocumentNode } from './studio-config/views'
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  theme,
  name: 'default',
  title: 'Sanity starter',

  projectId: 'm2i3zuya',
  dataset: 'production',

  plugins: [colorInput(), deskTool({structure}), defaultDocumentNode, visionTool()],

  schema: {
    types: schemaTypes,
  },
})
