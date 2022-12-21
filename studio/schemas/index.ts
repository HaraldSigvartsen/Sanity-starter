import articles from "./documents/articles";
import landingpage from './documents/landingpage'
import settings from './documents/settings'
import Body from './objects/Body'
import heroImage from './objects/heroImage'
import Pagebuilder from './objects/Pagebuilder'
import Slug from './objects/Slug'
import Subtitle from './objects/Subtitle'
import Text from './objects/Text'
import Title from './objects/Title'

export const schemaTypes = [
  // Documents
  articles,
  settings,
  landingpage,

  // Objects
  Title,
  Slug,
  Pagebuilder,
  Text,
  Body,
  Subtitle,
  heroImage,
]
