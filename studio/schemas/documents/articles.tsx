import { defineField } from "sanity";
import Pagebuilder from "../objects/Pagebuilder";
import Slug from "../objects/Slug";
import Title from "../objects/Title";


export default defineField({
    name: 'articles',
    title: 'Articles',
    type: 'document',
    fields:[
        Title, Slug, Pagebuilder
    ]
})