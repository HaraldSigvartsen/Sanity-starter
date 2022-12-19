import { defineArrayMember, defineField } from "sanity"

export default defineField ({
  name: 'body',
  title: 'Text',
  type: 'array',
  of: [
    defineArrayMember({
      name: 'Block',
      type: 'block',
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Number', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Title', value: 'h2'},
        {title: 'SubTitle', value: 'h3'},
      ],
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
  ],
});
