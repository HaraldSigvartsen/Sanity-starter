import {defineField} from 'sanity'

export default defineField({
  name: 'subTitle',
  title: 'Subtitle',
  type: 'text',
  rows: 4,
  validation: (Rule) => Rule.required()
})
