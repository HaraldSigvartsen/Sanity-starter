import articles from "./documents/articles";
import homepage from "./documents/homepage";
import settings from "./documents/settings";
import Body from "./objects/Body";
import Pagebuilder from "./objects/Pagebuilder";
import Slug from "./objects/Slug";
import Subtitle from "./objects/Subtitle";
import Text from "./objects/Text";
import Title from "./objects/Title";

export const schemaTypes = [
    // Documents
    articles,
    settings,
    homepage,

    // Objects
    Title,
    Slug,
    Pagebuilder,
    Text,
    Body,
    Subtitle,

    
]
