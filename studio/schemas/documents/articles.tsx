import {defineField} from 'sanity'
import Pagebuilder from '../objects/Pagebuilder'
import Slug from '../objects/Slug'
import Title from '../objects/Title'
import {MdArticle} from 'react-icons/md'
import heroImage from '../objects/heroImage'

export default defineField({
  name: 'articles',
  title: 'Articles',
  type: 'document',
  icon: MdArticle,
  fields: [Title, Slug, heroImage, Pagebuilder],
})
