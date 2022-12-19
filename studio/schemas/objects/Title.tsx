import {defineField} from 'sanity'

export default defineField({
  name: 'title',
  title: 'Title',
  type: 'string',
  validation: (Rule) => Rule.required()
})
