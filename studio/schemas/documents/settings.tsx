import {defineField} from 'sanity'
import {MdSettings} from 'react-icons/md'

//TODO create SEO object and MISC object. Looks prettier inside the studio.
export default defineField({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: MdSettings,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
      // icon: AiFillLayout,
    },
    {
      name: 'misc',
      title: 'Misc',
      // icon: AiFillLayout,
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      group: 'seo',
      rows: 4,
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      group: 'misc',
    }),
    defineField({
      name: 'fontColor',
      title: 'Font Color',
      type: 'color',
      group: 'misc',
    }),
    {
      title: 'Brand logo',
      group: 'misc',
      description: 'Best choice is to use an SVG where the color are set with currentColor',
      name: 'logo',
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
    },
  ],
})
