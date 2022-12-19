import {defineField} from 'sanity'

export default defineField({
  name: 'slug1',
  title: 'Slug',
  type: 'slug',
  description: '',
  options: {
    source: 'title',
  },
  validation: (Rule) => Rule.required()

})
