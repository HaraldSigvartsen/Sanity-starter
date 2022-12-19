
// import {FaListUl} from 'react-icons/fa'
// import {AiFillFileText, AiFillHome} from 'react-icons/ai'
import { defineArrayMember, defineField } from 'sanity';

export default defineField ({
  title: 'Pagebuilder',
  name: 'pagebuilder',
  type: 'array',
  of: [
    // defineArrayMember({
    //   type: 'body',
    //   name: 'body',
    //   title: 'Text content',
    // //   icon: AiFillHome,
    // }),
    defineArrayMember({
      name: 'bodyObject',
      title: 'Body',
      type: 'object',
    //   icon: AiFillFileText,
      fields: [
        defineField({
          name: 'bodyTitle',
          title: 'Title of Section',
          type: 'string',
        //   icon: AiFillFileText,
          description: 'This title is for Sanity only.',
        }),
       defineField({
          name: 'body',
          type: 'body',
          title: 'Body',
        }),
      ],
      preview: {
        select: {
          title: 'bodyTitle',
        },
        prepare(selection) {
          const {title}= selection
          return {
            title: title,
            // icon: AiFillFileText
          }
        },
      },
     
    }),
    
    
  ],
  
});
