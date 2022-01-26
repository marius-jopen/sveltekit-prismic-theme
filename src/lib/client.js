import { PrismicLink } from 'apollo-link-prismic'
import { ApolloClient } from '@apollo/client/core/core.cjs.js'
import { InMemoryCache } from '@apollo/client/cache/cache.cjs.js'

const uri = `https://mj-theme.prismic.io/graphql`

export const client = new ApolloClient({
  link: PrismicLink({ uri }),
  cache: new InMemoryCache(),
})
