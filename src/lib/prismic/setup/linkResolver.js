// Routing structure needs to be set up in order for the preview to work

export default function (doc) {
  if (doc.link_type === 'Web') {
    return doc.url
  } else {
    switch (doc.type) {
      case ('project'):
        return (`/${doc.uid}`)

      // case ('info'):
      //   return ('/page/info')

      case ('home'):
      default:
        return '/'
    }
  }
}