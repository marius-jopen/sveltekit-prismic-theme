export const namespace = 'laserfocus' // Change this to your Prismic ID
export const apiEndpoint = 'https://' + namespace + '.cdn.prismic.io/api/v2';

export const routes = [
  {
    type: 'home',
    path: '/',
  },
	{
    type: 'projects',
    path: '/projects',
  },
	{
    type: 'products',
    path: '/shop',
  },
	{
    type: 'blog_posts',
    path: '/blog',
  },
	{
    type: 'glossary_items',
    path: '/glossary',
  },
	{
    type: 'page',
    path: '/:uid',
  },
  {
    type: 'project',
    path: '/projects/:uid',
  },
	{
    type: 'blog_post',
    path: '/blog/:uid',
  },
	{
    type: 'glossary_item',
    path: '/glossary/:uid',
  },
	{
    type: 'product',
    path: '/products/:uid',
  },
]

export function linkResolver (doc) {
  if (doc.link_type === 'Web') {
    return doc.url
  } else {
    switch (doc.type) {
      case ('projects'):
        return '/projects'
      case ('project'):
        return `/projects/${doc.uid}`
			case ('blog_posts'):
				return '/blog'
			case ('blog_post'):
				return `/blog/${doc.uid}`
			case ('glossary_items'):
				return '/glossary'
			case ('glossary_item'):
				return `/glossary/${doc.uid}`
			case ('products'):
				return '/shop'
			case ('product'):
				return `/shop/${doc.uid}`
			case ('page'):
				return `/${doc.uid}`
      case ('home'):
      default:
        return '/'
    }
  }
}