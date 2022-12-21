import {defineField} from 'sanity'

export default defineField({
  title: 'Hero Image',
  description:
    'Double check the file size before you upload. Big images may cause the page to lag.',
  name: 'heroImage',
  type: 'image',
  options: {hotspot: true},
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
    },
  ],
})
