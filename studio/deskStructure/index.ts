import { StructureBuilder, StructureResolverContext } from "sanity/desk";
import { Articles } from "./structureItems/articles";
import { homepage } from "./structureItems/homepage";
import { settings } from "./structureItems/settings.ts";

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
S.list()
.title('Content')
.items([
    settings(S),
    S.divider(),
    homepage(S),
    Articles(S, context)

])
