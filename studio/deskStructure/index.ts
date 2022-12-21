import { StructureBuilder, StructureResolverContext } from "sanity/desk";
import { Articles } from "./structureItems/articles";
import {landingPage} from './structureItems/landingPage'
import { settings } from "./structureItems/settings.ts";

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([settings(S), S.divider(), landingPage(S), Articles(S, context)])
