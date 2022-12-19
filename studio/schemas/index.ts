import articles from "./documents/articles";
import settings from "./documents/settings";
import Body from "./objects/Body";
import Pagebuilder from "./objects/Pagebuilder";
import Slug from "./objects/Slug";
import Text from "./objects/Text";
import Title from "./objects/Title";

export const schemaTypes = [
    // Documents
    articles,
    settings,

    // Objects
    Title,
    Slug,
    Pagebuilder,
    Text,
    Body,

    
]
