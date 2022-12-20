import { IPagebuilder } from "../pagebuilder";
import { ISlugPage } from "../slug";

export interface IArticles extends ISlugPage {
  _type: "articles";
  title: string;
  pagebuilder: IPagebuilder[];
}
