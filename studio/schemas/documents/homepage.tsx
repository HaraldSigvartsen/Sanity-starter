import { defineField } from "sanity";
import Slug from "../objects/Slug";
import Subtitle from "../objects/Subtitle";
import Title from "../objects/Title";


export default defineField({
    name: 'homepage',
    title: 'Home page',
    type: 'document',
    fields:[
        Title, Slug, Subtitle
    ]
})