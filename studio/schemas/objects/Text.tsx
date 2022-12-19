import { defineArrayMember, defineField } from "sanity";

export default defineField({
  name: 'textBlock',
  description: '',
  type: 'array',
  title: 'Text Block',
  of: [
   defineArrayMember({
      name: 'Block',
      type: 'block',

      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
      },
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Title', value: 'h2'},
        {title: 'SubTitle', value: 'h3'},
      ],
    })
  ],
})
