import { StructureBuilder, StructureResolverContext } from "sanity/desk";
// import Iframe from "sanity-plugin-iframe-pane";

const articlePageTitle = "All articles";
export const Articles = (S: StructureBuilder, context: StructureResolverContext) =>
	S.listItem()
		.title(articlePageTitle)
		.schemaType('articles')
		// .icon(RiArticleLine)
		.child(
			S.documentList()
				.title(articlePageTitle)
				.menuItems(S.documentTypeList('articles').getMenuItems()!)
				.filter(`_type == "articles"`)
				.child((documentId) =>
					S.document()
						.documentId(documentId)
						.schemaType('articles')
						.views([
							S.view.form(),
							// S.view
							// 	.component(Iframe)
							// 	.options({
							// 		url: (doc: any) => resolveProductionUrl(doc, context),
							// 	})
							// 	.title("Preview"),
						])
				)
		);