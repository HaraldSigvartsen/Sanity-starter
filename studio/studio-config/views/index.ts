import Iframe from 'sanity-plugin-iframe-pane'
import { StructureBuilder, StructureContext } from 'sanity/desk'

// Specify document types
const previewSchemaTypes = ['articles', 'collections', 'about']

export const defaultDocumentNode = (S: StructureBuilder, {schemaType}: any) => {
  // Add previews for specified schema types
  if (previewSchemaTypes.includes(schemaType)) {
    return S.document().views([
      S.view.form(),
      S.view
        .component(Iframe)
        .title('Preview')
        .options({
          url: (doc: any) => resolveProductionUrl(doc, S.context),
          defaultSize: 'desktop',
          reload: {
            button: true,
            revision: true,
          },
          attributes: {
            allow: 'fullscreen', // string, optional
          },
        }),
    ])
  }
}

const resolveProductionUrl = async (doc: any, context: StructureContext) => {
  const {getClient} = context

  if (previewSchemaTypes.includes(doc._type)) {
    const client = await getClient({apiVersion: '2021-10-21'})
    const slug = await client.fetch('*[_id == $id][0].slug.current', {id: doc._id})

    // Build preview url
    const url = new URL('https://ignite-toolbox.vercel.app/')

    switch (doc._type) {
      case 'tools':
        url.pathname = `tools/${slug}`
        break
      case 'collections':
        url.pathname = `collections/${slug}`
        break
      case 'about':
        url.pathname = `${slug}`
        break
      default:
        break
    }

    // Add preview url params
    url.searchParams.set('preview', 'true')

    return url.toString()
  }

  return doc
}
