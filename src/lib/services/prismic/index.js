export const namespace = 'mj-theme' // Change this to your Prismic ID
export const apiEndpoint = 'https://' + namespace + '.cdn.prismic.io/api/v2';

export const routes = [
  {
    type: 'home',
    path: '/',
  },
  {
    type: 'project',
    path: '/:uid',
  },
]

export function linkResolver (doc) {
  if (doc.link_type === 'Web') {
    return doc.url
  } else {
    switch (doc.type) {  
      default:
        return '/'
    }
  }
}
