import {defineArrayMember, defineField} from 'sanity'
import Slug from '../objects/Slug'
import Subtitle from '../objects/Subtitle'
import Title from '../objects/Title'
import {RiLayoutTopFill} from 'react-icons/ri'
import heroImage from '../objects/heroImage'

export default defineField({
  name: 'landingPage',
  title: 'Landing page',
  type: 'document',
  icon: RiLayoutTopFill,
  fields: [
    heroImage,
    Title,
    Slug,
    Subtitle,
    defineField({
      name: 'articles',
      type: 'array',
      description: 'Pick some articles you want to show on the home screen!',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{type: 'articles'}],
        }),
      ],
    }),
  ],
})
