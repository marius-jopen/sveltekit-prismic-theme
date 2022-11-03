export const namespace = 'laserfocus' // Change this to your Prismic ID
export const apiEndpoint = 'https://' + namespace + '.cdn.prismic.io/api/v2';

export const routes = [
  {
    type: 'home',
    path: '/',
  },
	{
    type: 'page',
    path: '/:uid',
  },
  {
    type: 'project',
    path: '/projects/:uid',
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
