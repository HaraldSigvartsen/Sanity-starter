import { defineField } from "sanity";
import Slug from "../objects/Slug";
import Title from "../objects/Title";


export default defineField({
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields:[
        Title, Slug
    ]
})